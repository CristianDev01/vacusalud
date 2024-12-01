from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Usuario(AbstractUser):

  TIPOS_USUARIO = (
    ('admin', 'Administrador'),
    ('empresa', 'Empresa'),
    ('persona', 'Persona'),
  )

  TIPOS_DOCUMENTO = (
      ('CC', 'Cédula de ciudadanía'),
      ('CE', 'Cédula de extranjería'),
      ('TI', 'Tarjeta de identidad'),
      ('RC', 'Registro civil'),
  )
  
  tipos_usuario = models.CharField(max_length=20, choices=TIPOS_USUARIO)
  nombre_empresa = models.CharField(max_length=200, unique=True, null=True)
  tipos_documento = models.CharField(max_length=2, choices=TIPOS_DOCUMENTO, blank=True, null=True)
  numero_identificacion = models.CharField(max_length=50, blank=True, null=True)

  def __str__(self):
    return self.tipos_usuario