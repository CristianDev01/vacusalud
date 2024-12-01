from django.urls import path
from .views import AdminLoginView, EmpresaLoginView, PersonaLoginView
from .views import EmpresaRegistroView, PersonaRegistroView
from .views import RestablecerContrasenaView, NuevaContrasenaView, ActualizarContrasenaView

urlpatterns = [
    path('login-admin/', AdminLoginView.as_view()),
    path('login-empresa/', EmpresaLoginView.as_view()),
    path('login-persona/', PersonaLoginView.as_view()),
    path('registro-empresa/', EmpresaRegistroView.as_view()),
    path('registro-persona/', PersonaRegistroView.as_view()),
    path('restablecer-empresa/', RestablecerContrasenaView.as_view(), name='restablecer-empresa'),
    path('restablecer-persona/', RestablecerContrasenaView.as_view(), name='restablecer-persona'),
    path('contrasena-nueva/<uidb64>/<token>/', NuevaContrasenaView.as_view(), name='contrasena-nueva'),
    path('actualizar-contrasena/', ActualizarContrasenaView.as_view(), name='actualizar-contrasena'),

]