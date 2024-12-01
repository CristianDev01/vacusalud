from django.urls import path
from .views import BuscarPersonaView, ListarVacunasView, AsignarVacunaView, PersonaVacunadaView, VacunaAplicadaPersonaView
urlpatterns = [
    path('pacientes/', BuscarPersonaView.as_view(), name='listar_pacientes'),
    path('vacunas/', ListarVacunasView.as_view(), name='listar_vacunas'),
    path('asignar-vacuna/', AsignarVacunaView.as_view(), name='asignar_vacunas'),
    path('pacientes-vacunados/', PersonaVacunadaView.as_view(), name='pacientes-vacunados'),
    path('vacunas-aplicadas/', VacunaAplicadaPersonaView.as_view(), name='vacunas-aplicadas'),
]