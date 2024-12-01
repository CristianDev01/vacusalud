from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Persona, Empresa, Vacunas, EsquemaVacunas
from .serializer import BuscarPersonaSerializer, ListarVacunasSerializer, EsquemaVacunasSerializer, PersonaVacunadaSerializer

class BuscarPersonaView(APIView):
  permission_classes = [IsAuthenticated]
  def get(self, request):
    pacientes = Persona.objects.filter(empresa=request.user.empresa)
    serializer = BuscarPersonaSerializer(pacientes, many=True)
    return Response(serializer.data)
  
class ListarVacunasView(APIView):
  def get(self, request):
    vacunas = Vacunas.objects.all()
    serializer = ListarVacunasSerializer(vacunas, many=True)
    return Response(serializer.data)

class AsignarVacunaView(APIView):
  def post(self, request):
    persona_id = request.data.get('persona_id')
    vacuna_id = request.data.get('vacuna_id')
    empresa_id = request.data.get('empresa_id')

    if not all([persona_id, vacuna_id, empresa_id]):
      return Response({'error': 'Faltan datos esenciales (persona, vacuna, empresa)'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = EsquemaVacunasSerializer(
      data=request.data,
      context={'persona_id': persona_id, 'vacuna_id': vacuna_id, 'empresa_id': empresa_id}
    )

    if serializer.is_valid():
      serializer.save()
      return Response({'message': 'Vacuna asignada correctamente.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    else:
      return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

class PersonaVacunadaView(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request):
    usuario_empresa = request.user
    try:
      empresa = Empresa.objects.get(usuario=usuario_empresa)
    except Empresa.DoesNotExist:
      return Response({"error": "No se encontró una empresa asociada a este usuario."}, status=404)
    
    esquema = EsquemaVacunas.objects.filter(empresa=empresa).select_related('persona__usuario', 'empresa', 'vacunas')

    if not esquema.exists():
      return Response({"error": "La empresa no tiene registros de pacientes vacunados."}, status=400)
    
    serializer = PersonaVacunadaSerializer(esquema, many=True)
    return Response(serializer.data)
  

class VacunaAplicadaPersonaView(APIView):
  permission_classes = [IsAuthenticated]
  
  def get(self, request):
    usuario = request.user
    try:
      persona = usuario.persona
    except AttributeError:
      return Response({"error": "El usuario no está asociado a ninguna empresa."}, status=400)

    esquema = EsquemaVacunas.objects.filter(persona=persona).select_related('persona__usuario', 'empresa', 'vacunas')

    if not esquema.exists():
      return Response({"error": "No tienes registro de vacunas aplicadas."}, status=400)
    
    serializer = PersonaVacunadaSerializer(esquema, many=True)
    return Response(serializer.data)