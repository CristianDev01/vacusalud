from django.contrib.auth import get_user_model
from django.contrib.auth.models import update_last_login
from .serializer import AdminLoginSerializer
from .serializer import EmpresaLoginSerializer
from .serializer import PersonaLoginSerializer
from .serializer import EmpresaRegistroSerializer
from .serializer import PersonaRegistroSerializer
from .serializer import RestablecerContrasenaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.hashers import make_password, check_password
from django.utils.http import urlsafe_base64_decode
from rest_framework.permissions import IsAuthenticated


user_model = get_user_model()

class AdminLoginView(APIView):
  def post(self, request):
    serializer = AdminLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    try:
      user = user_model.objects.get(email=serializer.validated_data['email'])
    except user_model.DoesNotExist:
      return Response({'error': 'Ingresa un correo eléctronico válido'}, status=status.HTTP_400_BAD_REQUEST)
    
    if not user.check_password(serializer.validated_data['password']):
      return Response({'error': 'Ingresa una contraseña válida'}, status=status.HTTP_400_BAD_REQUEST)
    
    refresh = RefreshToken.for_user(user)
    refresh['tipos_usuario'] = user.tipos_usuario
    update_last_login(None, user)
    
    user_data = {
    'refresh': str(refresh),
    'access': str(refresh.access_token),
    'id': user.id,
    'username': user.username,
    'tipos_usuario': user.tipos_usuario
    }  
    return Response(user_data, status=status.HTTP_200_OK)
  
  
class EmpresaLoginView(APIView):
  def post(self, request):
    serializer = EmpresaLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    try:
      user = user_model.objects.get(username=serializer.validated_data['username'])
    except user_model.DoesNotExist:
      return Response({'error': 'El nombre de usuario ingresado no existe. '}, status=status.HTTP_400_BAD_REQUEST)
    
    if not user.check_password(serializer.validated_data['password']):
      return Response({'error': 'Ingresa una contraseña válida'}, status=status.HTTP_400_BAD_REQUEST)
    
    refresh = RefreshToken.for_user(user)
    refresh['tipos_usuario'] = user.tipos_usuario
    update_last_login(None, user)
    
    user_data = {
    'refresh': str(refresh),
    'access': str(refresh.access_token),
    'id': user.id,
    'username': user.username,
    'tipos_usuario': user.tipos_usuario
    }  
    return Response(user_data, status=status.HTTP_200_OK)
  

class PersonaLoginView(APIView):
  def post(self, request):
    serializer = PersonaLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    try:
      user = user_model.objects.get(
        tipos_documento=serializer.validated_data['tipos_documento'],
        numero_identificacion=serializer.validated_data['numero_identificacion']
      )

    except user_model.DoesNotExist:
      return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
    
    if not user.check_password(serializer.validated_data['password']):
      return Response({'error': 'Ingresa una contraseña válida'}, status=status.HTTP_400_BAD_REQUEST)
    
    refresh = RefreshToken.for_user(user)
    refresh['tipos_usuario'] = user.tipos_usuario
    update_last_login(None, user)
    
    user_data = {
    'refresh': str(refresh),
    'access': str(refresh.access_token),
    'id': user.id,
    'username': user.username,
    'tipos_usuario': user.tipos_usuario
    }
   
    return Response(user_data, status=status.HTTP_200_OK)
  

class EmpresaRegistroView(APIView):
  def post(self, request):
    serializer = EmpresaRegistroSerializer(data=request.data)

    if serializer.is_valid():
      user, password = serializer.save()

      user_data = {
      'nombre_empresa': user.nombre_empresa,  
      'id': user.id,
      'username': user.username,
      'email': user.email,
      'password': password
    }
      return Response(user_data, status=status.HTTP_201_CREATED)
    
    error_messages = list(serializer.errors.values())[0]
    return Response({"error": error_messages[0]}, status=status.HTTP_400_BAD_REQUEST)
  

class PersonaRegistroView(APIView):

  def post(self, request):
    serializer = PersonaRegistroSerializer(data=request.data, context={'request': request})

    if serializer.is_valid():
      user, password, persona = serializer.save()
      
      user_data = {
      'id': user.id,
      'tipos_documento': user.tipos_documento,
      'numero_identificacion': user.numero_identificacion,
      'username': user.username,
      'email': user.email,
      'password': password,
      'nombre_persona': persona.nombre_persona
    }
      return Response(user_data, status=status.HTTP_201_CREATED)
    
    error_messages = list(serializer.errors.values())[0]
    return Response({"error": error_messages[0]}, status=status.HTTP_400_BAD_REQUEST) 
  
  
class RestablecerContrasenaView(APIView):
  def post(self, request):
    serializer = RestablecerContrasenaSerializer(data=request.data)
        
    if serializer.is_valid():
      user = serializer.validated_data['user']
            
            # Generar token y enlace
      token = default_token_generator.make_token(user)
      uid = urlsafe_base64_encode(force_bytes(user.pk))
      reset_url = f"{settings.FRONTEND_URL}contrasena-nueva/{uid}/{token}"

            # Enviar correo
      send_mail(
          subject="Restablecimiento de contraseña",
          message=f"Hola {user.username},\n\nHaz clic en el siguiente enlace para restablecer contraseña:\n\n{reset_url}",

          from_email=settings.DEFAULT_FROM_EMAIL,
          recipient_list=[user.email],
      )

      return Response(
        {"message": "Se ha enviado un enlace de restablecimiento al correo proporcionado."},
        status=status.HTTP_200_OK,
      )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

class NuevaContrasenaView(APIView):
  def post(self, request, uidb64, token):
    try:
            # Decodificar el UID para obtener el usuario
      uid = urlsafe_base64_decode(uidb64).decode()
      user = get_user_model().objects.get(pk=uid)

            # Verificar el token
      if default_token_generator.check_token(user, token):
                # Si el token es válido, se actualiza la contraseña
        nueva_contraseña = request.data.get('password')
        if nueva_contraseña:
          user.password = make_password(nueva_contraseña)
          user.save()

          return Response({"message": "Contraseña cambiada correctamente. Inicia sesión!"}, status=status.HTTP_200_OK)
        else:
          return Response({"error": "Debes proporcionar una nueva contraseña."}, status=status.HTTP_400_BAD_REQUEST)
        
      else:
        return Response({"error": "Token inválido o expirado."}, status=status.HTTP_400_BAD_REQUEST)
      
    except Exception as e:
      return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

class ActualizarContrasenaView(APIView):
  permission_classes = [IsAuthenticated]  # Asegura que solo los usuarios autenticados puedan acceder

  def post(self, request):
        # Obtener el usuario autenticado
    user = request.user

        # Obtener la contraseña actual y la nueva contraseña desde los datos del request
    password_actual = request.data.get('password_actual')
    nueva_contrasena = request.data.get('nueva_contrasena')

        # Validar que ambas contraseñas fueron proporcionadas
    if not password_actual or not nueva_contrasena:
      return Response(
           {"error": "Debe proporcionar tanto la contraseña actual como la nueva."},
            status=status.HTTP_400_BAD_REQUEST,
        )

        # Verificar que la contraseña actual proporcionada es correcta
    if not check_password(password_actual, user.password):
      return Response(
          {"error": "La contraseña actual es incorrecta."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if check_password(nueva_contrasena, user.password):
      return Response(
        {"error": "La nueva contraseña no puede ser igual a la contraseña actual."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    user.password = make_password(nueva_contrasena)  # Hashear la nueva contraseña
    user.save()

    return Response(
      {"message": "Contraseña actualizada correctamente."},
       status=status.HTTP_200_OK,
    )