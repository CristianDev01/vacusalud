from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth import get_user_model
from .models import Persona, Acudiente
from .serializer import AdministradorSerializer, EmpresaSerializer, PersonaSerializer, AcudienteSerializer, VerEditarEmpresaSerializer

# Create your views here.

user_model = get_user_model()

class AdministradorView(viewsets.ModelViewSet):
  serializer_class = AdministradorSerializer
  permission_classes = [IsAdminUser]

  def get_queryset(self):
    user = self.request.user
    return user_model.objects.filter(id=user.id)
  

class EmpresaView(viewsets.ModelViewSet):
  serializer_class = EmpresaSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return user_model.objects.filter(id=user.id)
  

class PersonaView(viewsets.ModelViewSet):
  serializer_class = PersonaSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    user = self.request.user
    return Persona.objects.filter(usuario=user)

class AcudienteView(viewsets.ModelViewSet):
  queryset = Acudiente.objects.all()
  serializer_class = AcudienteSerializer

class VerEditarEmpresaView(viewsets.ModelViewSet):
  serializer_class = VerEditarEmpresaSerializer
  permission_classes = [IsAdminUser]
  queryset = user_model.objects.filter(tipos_usuario='empresa')