from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AdministradorView, EmpresaView, PersonaView, AcudienteView, VerEditarEmpresaView

router = DefaultRouter()

router.register(r'administrador', AdministradorView, basename='administrador')
router.register(r'empresa', EmpresaView, basename='empresa')
router.register(r'persona', PersonaView, basename='persona')
router.register(r'acudiente', AcudienteView, basename='acudiente')
router.register(r'ver-editar-empresa', VerEditarEmpresaView, basename='ver-editar-empresa')

urlpatterns = [
  path('', include(router.urls)),

]