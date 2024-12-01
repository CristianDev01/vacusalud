from django.db import models 
from django.contrib.auth import get_user_model

# Create your models here.

user_model = get_user_model()

class Empresa(models.Model):
  usuario = models.OneToOneField(user_model, on_delete=models.CASCADE)
  telefono = models.CharField(max_length=15, blank=True, null=True)
  direccion = models.CharField(max_length=100, blank=True, null=True)
  departamento = models.CharField(max_length=100, blank=True, null=True)
  municipio = models.CharField(max_length=100, blank=True, null=True)

  def __str__(self):
    return self.usuario.nombre_empresa

class Persona(models.Model):
  usuario = models.OneToOneField(user_model, on_delete=models.CASCADE )
  empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
  nombre_persona = models.CharField(max_length=50, blank=False, null=False  )
  genero_persona = models.CharField(max_length=15, blank=False, null=False)
  rangos_edad = models.CharField(max_length=15, blank=False, null=False)
  fecha_nacimiento = models.DateField()
  direccion = models.CharField(max_length=100, blank=False, null=False)
  telefono = models.CharField(max_length=15, blank=True, null=True)
  departamento = models.CharField(max_length=100, blank=False, null=False)
  municipio = models.CharField(max_length=100, blank=False, null=False)

  def __str__(self):
    return self.nombre_persona

class Acudiente(models.Model):
  TIPOS_ACUDIENTE = (
    ('padre', 'Padre'),
    ('madre', 'Madre'),
    ('familiar', 'Familiar'),
  )

  persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
  tipos_acudiente = models.CharField(max_length=15, choices=TIPOS_ACUDIENTE, blank=True, null=True )
  numero_identificacion_acudiente = models.CharField(max_length=30, blank=True, null=True)
  nombre_acudiente = models.CharField(max_length=50, blank=True, null=True)
  telefono = models.CharField(max_length=15, blank=True, null=True)