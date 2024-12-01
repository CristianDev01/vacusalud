from django.db import models
from usuarios.models import Persona
from usuarios.models import Empresa
# Create your models here.

class Vacunas(models.Model):
  enfermedad = models.CharField(max_length=100, unique=True, blank=False, null=False)
  vacuna = models.CharField(max_length=100, blank=False, null=False)
  dosis = models.CharField(max_length=100, blank=False, null=False)
  numero_dosis = models.IntegerField(blank=False, null=False)
  edad = models.CharField(max_length=500, blank=False, null=False)
  intervalo = models.CharField(max_length=500, blank=False, null=False)
  via_sitio_aplicacion = models.CharField(max_length=100, blank=False, null=False)
  refuerzos = models.CharField(max_length=100, blank=False, null=False)

  def __str__(self):
    return self.enfermedad

class EsquemaVacunas(models.Model):

  SIGUIENTE_DOSIS = (
    ('Aplica', 'Aplica'),
    ('No aplica', 'No Aplica')
  )
  
  persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
  empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
  vacunas = models.ForeignKey(Vacunas, on_delete=models.CASCADE)
  fecha_creacion = models.DateTimeField()
  numero_dosis_aplicada = models.IntegerField()
  fecha_aplicacion = models.DateTimeField()
  siguiente_dosis = models.CharField(max_length =15, choices=SIGUIENTE_DOSIS, blank=False, null=False)
  fecha_siguiente_dosis = models.DateTimeField(blank=True, null=True)
  observacion = models.TextField(blank=True, null=True)