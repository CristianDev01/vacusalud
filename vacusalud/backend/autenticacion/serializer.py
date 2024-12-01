from django.contrib.auth import get_user_model
from usuarios.models import Empresa, Persona, Acudiente
from rest_framework import serializers
import secrets
import string
from django.core.mail import send_mail
from django.conf import settings

user_model = get_user_model()

class AdminLoginSerializer(serializers.Serializer):
  email = serializers.EmailField(required=True)
  password = serializers.CharField(write_only=True, required=True)


class EmpresaLoginSerializer(serializers.Serializer):
  username = serializers.CharField(required=True)
  password = serializers.CharField(write_only=True, required=True)


class PersonaLoginSerializer(serializers.Serializer):
  numero_identificacion = serializers.CharField(required=True)
  password = serializers.CharField(write_only=True, required=True)
  tipos_documento = serializers.ChoiceField(choices=user_model.TIPOS_DOCUMENTO, required=True)


class EmpresaRegistroSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    allow_blank=False,
  )
  nombre_empresa = serializers.CharField(
    required=True,
    allow_blank=False,
  )

  class Meta:
    model = user_model
    fields = ['id', 'nombre_empresa', 'username', 'email']

  def create(self, validated_data):
    random_password = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(12))

    user = user_model(
      nombre_empresa=validated_data['nombre_empresa'],
      username=validated_data['username'],
      email=validated_data['email'],
      tipos_usuario='empresa',
    )
    user.set_password(random_password)
    user.save()
    
    Empresa.objects.create(usuario=user)

    send_mail(
        subject='¡Bienvenido a la plataforma VacuSalud!',
        message=f"Hola {user.nombre_empresa},\n\n"
                f"¡Bienvenido a VacuSalud! Nos complace informarte que tu registro ha sido completado con éxito.\n\n"
                f"Recuerda que tus credenciales son las siguientes:\n\n"
                f"Nombre de usuario: {user.username}\n"  
                f"Contraseña: {random_password}\n\n"
                f"¡Gracias por confiar en VacuSalud!",

        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        fail_silently=False,
    )    

    return user, random_password
    
  def validate_email(self, value):
    if user_model.objects.filter(email=value).exists():
      raise serializers.ValidationError("El correo electrónico ya está asociado a una empresa.")
    return value
  
  def validate_nombre_empresa(self, value):
    if user_model.objects.filter(nombre_empresa=value).exists():
      raise serializers.ValidationError("Esta empresa ya esta registrada.")
    return value
  
  
class PersonaRegistroSerializer(serializers.ModelSerializer):
  nombre_persona = serializers.CharField(allow_blank=True)
  genero_persona = serializers.CharField(allow_blank=True)
  rangos_edad = serializers.CharField(allow_blank=True)
  fecha_nacimiento = serializers.CharField( allow_blank=True)
  departamento = serializers.CharField(allow_blank=True)
  municipio = serializers.CharField(allow_blank=True)
  direccion = serializers.CharField(allow_blank=True)
  telefono = serializers.CharField(allow_blank=True)

  tipos_acudiente = serializers.ChoiceField(
      choices=[('padre', 'Padre'), ('madre', 'Madre'), ('familiar', 'Familiar')], 
      required=False, allow_null=True, allow_blank=True)
  
  numero_identificacion_acudiente = serializers.CharField(required=False, allow_null=True, allow_blank=True)
  nombre_acudiente = serializers.CharField(required=False, allow_null=True, allow_blank=True)
  telefono_acudiente = serializers.CharField(required=False, allow_null=True, allow_blank=True)  

  class Meta:
    model = user_model
    fields = ['id', 'tipos_documento', 'numero_identificacion', 'username', 'email', 'nombre_persona', 'genero_persona', 'rangos_edad', 'fecha_nacimiento', 'departamento', 'municipio', 'direccion', 'telefono', 'tipos_acudiente', 'numero_identificacion_acudiente', 'nombre_acudiente', 'telefono_acudiente']

  def create(self, validated_data):
    empresa = self.context['request'].user.empresa

    if validated_data['rangos_edad'] == 'menor':
      tipos_acudiente = validated_data.get('tipos_acudiente')
      numero_identificacion_acudiente = validated_data.get('numero_identificacion_acudiente')
      nombre_acudiente = validated_data.get('nombre_acudiente')
      telefono_acudiente = validated_data.get('telefono_acudiente')

      if not (tipos_acudiente and numero_identificacion_acudiente and nombre_acudiente and telefono_acudiente):
        raise serializers.ValidationError("Debe proporcionar todos los datos del acudiente para menores de edad.")

    random_password = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(12))
    user = user_model(
      tipos_documento=validated_data['tipos_documento'],
      numero_identificacion=validated_data['numero_identificacion'],
      username=validated_data['username'],
      email=validated_data['email'],
      tipos_usuario='persona',
    )
    user.set_password(random_password)
    user.save()

    persona = Persona.objects.create(usuario=user, empresa=empresa,
      nombre_persona = validated_data.get('nombre_persona'),
      genero_persona = validated_data.get('genero_persona'),
      rangos_edad = validated_data.get('rangos_edad'),
      fecha_nacimiento = validated_data.get('fecha_nacimiento'),
      departamento = validated_data.get('departamento'),
      municipio = validated_data.get('municipio'),
      direccion = validated_data.get('direccion'),
      telefono = validated_data.get('telefono')
    )

    if validated_data['rangos_edad'] == 'menor':
      Acudiente.objects.create(
        persona=persona,
        tipos_acudiente=tipos_acudiente,
        numero_identificacion_acudiente=numero_identificacion_acudiente,
        nombre_acudiente=nombre_acudiente,
        telefono=telefono_acudiente
    )
      
    send_mail(
        subject='¡Bienvenido a la plataforma VacuSalud!',
        message=f"Hola {persona.nombre_persona},\n\n"
                f"¡Bienvenido a VacuSalud! Nos complace informarte que tu registro ha sido completado con éxito.\n"
                f"Tu empresa, {empresa.usuario.nombre_empresa}, ha sido la encargada de registrarte en nuestra plataforma para que puedas acceder a toda la información relacionada con tu salud y vacunas.\n\n"
                f"Recuerda que tus credenciales son las siguientes:\n\n"
                f"Número de identificación: {persona.usuario.numero_identificacion}\n"  
                f"Usuario: {user.username}\n"
                f"Contraseña: {random_password}\n\n"
                f"¡Gracias por confiar en VacuSalud y en tu empresa {empresa.usuario.nombre_empresa} para cuidar de tu bienestar!",

        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        fail_silently=False,
    )

    return user, random_password, persona
    
  def validate_email(self, value):
    if user_model.objects.filter(email=value).exists():
      raise serializers.ValidationError("El correo electrónico ya está asociado a un paciente.")
    return value 

  def validate_numero_identificacion(self, value):
    if user_model.objects.filter(numero_identificacion=value).exists():
      raise serializers.ValidationError("El número de identificación ya está asociado a un paciente.")
    return value  
  
class RestablecerContrasenaSerializer(serializers.ModelSerializer):
  username = serializers.CharField()
  email = serializers.EmailField()

  class Meta:
    model = user_model
    fields = ['username', 'email']

  def validate(self, data):
    username = data.get('username')
    email = data.get('email')

    try:
      user = user_model.objects.get(username=username)
    except user_model.DoesNotExist:
      raise serializers.ValidationError({"error": "El usuario ingresado no existe."})

    if user.email != email:
      raise serializers.ValidationError({"error": "El correo electrónico no coincide con el usuario proporcionado."})

    data['user'] = user
    return data