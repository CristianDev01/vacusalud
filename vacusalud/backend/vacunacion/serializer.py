from rest_framework import serializers
from .models import Persona, Empresa, Vacunas, EsquemaVacunas
from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings

class BuscarPersonaSerializer(serializers.ModelSerializer):
  numero_identificacion = serializers.CharField(source='usuario.numero_identificacion')

  class Meta:
    model = Persona
    fields = ['id', 'numero_identificacion', 'nombre_persona', 'fecha_nacimiento', 'rangos_edad', 'genero_persona', 'departamento', 'municipio', 'empresa_id']

class ListarVacunasSerializer(serializers.ModelSerializer):
  class Meta:
    model = Vacunas
    fields = '__all__'

class EsquemaVacunasSerializer(serializers.ModelSerializer):
  class Meta:
    model = EsquemaVacunas
    fields = ['numero_dosis_aplicada', 'siguiente_dosis', 'fecha_siguiente_dosis', 'observacion']
    
  def create(self, validated_data):
    persona_id = self.context.get('persona_id')
    vacuna_id = self.context.get('vacuna_id') 
    empresa_id = self.context.get('empresa_id')
    persona = Persona.objects.get(id=persona_id)
    vacuna = Vacunas.objects.get(id=vacuna_id)
    empresa = Empresa.objects.get(id=empresa_id)

    fecha_aplicacion = validated_data.get('fecha_aplicacion', timezone.now())

    esquema_vacuna = EsquemaVacunas.objects.create(
      persona=persona,
      empresa=empresa,
      vacunas=vacuna,
      fecha_creacion=validated_data.get('fecha_creacion', timezone.now()),
      numero_dosis_aplicada=validated_data['numero_dosis_aplicada'],
      fecha_aplicacion=fecha_aplicacion,
      siguiente_dosis=validated_data['siguiente_dosis'],
      fecha_siguiente_dosis=validated_data.get('fecha_siguiente_dosis', None),
      observacion=validated_data.get('observacion', '')
    )

    send_mail(
        subject='¡Vacuna aplicada con éxito!',
        message=f"Hola {persona.nombre_persona},\n\n"
                f"¡Felicidades! Tu vacuna ha sido aplicada satisfactoriamente.\n"
                f"Gracias a tu esfuerzo por mantener tu salud al día, ahora estás un paso más cerca de completar tu esquema de vacunación. Puedes acceder a tu historial de vacunas y verificar los detalles de la aplicación en tu cuenta de VacuSalud.\n\n"
                f"Aquí tienes un resumen de la vacuna aplicada:\n\n"
                f"Vacuna: {vacuna.vacuna}\n" 
                f"Dosis aplicada: {esquema_vacuna.numero_dosis_aplicada}\n" 
                f"Siguiente dosis: {esquema_vacuna.siguiente_dosis}\n"
                f"Fecha de aplicación: {esquema_vacuna.fecha_aplicacion}\n"
                f"Observación: {esquema_vacuna.observacion}\n"
                f"Empresa: {empresa.usuario.nombre_empresa}\n"
                f"Lugar de aplicación: {empresa.direccion} {empresa.municipio} {empresa.departamento}\n\n"
                f"¡Gracias por confiar en VacuSalud y en tu empresa {empresa.usuario.nombre_empresa} para cuidar de tu bienestar!",

        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[persona.usuario.email],
        fail_silently=False,
    )    
    return esquema_vacuna
  
class PersonaVacunadaSerializer(serializers.ModelSerializer):
  fecha_creacion = serializers.SerializerMethodField()
  numero_dosis_aplicada = serializers.IntegerField()
  fecha_aplicacion = serializers.SerializerMethodField()
  siguiente_dosis = serializers.CharField()
  fecha_siguiente_dosis = serializers.SerializerMethodField()
  observacion = serializers.CharField()

  nombre_persona = serializers.CharField(source='persona.nombre_persona')
  numero_identificacion = serializers.CharField(source='persona.usuario.numero_identificacion')
  fecha_nacimiento = serializers.DateField(source='persona.fecha_nacimiento')
  vacuna = serializers.CharField(source='vacunas.vacuna')
  enfermedad = serializers.CharField(source='vacunas.enfermedad')
  nombre_empresa = serializers.CharField(source='empresa.usuario.nombre_empresa')
  direccion = serializers.CharField(source='empresa.direccion')
  municipio = serializers.CharField(source='empresa.municipio')
  telefono = serializers.CharField(source='empresa.telefono')

  class Meta:
    model = EsquemaVacunas
    fields = ['id', 'nombre_persona', 'numero_identificacion', 'fecha_nacimiento', 'vacuna', 'numero_dosis_aplicada', 'fecha_aplicacion', 'fecha_creacion', 'enfermedad', 'nombre_empresa', 'direccion', 'siguiente_dosis', 'fecha_siguiente_dosis', 'observacion', 'municipio', 'telefono' ]

  def get_fecha_creacion(self, obj):
    return obj.fecha_creacion.strftime('%Y-%m-%d %H:%M:%S') if obj.fecha_creacion else None

  def get_fecha_aplicacion(self, obj):
    return obj.fecha_aplicacion.strftime('%Y-%m-%d %H:%M:%S') if obj.fecha_aplicacion else None

  def get_fecha_siguiente_dosis(self, obj):
    return obj.fecha_siguiente_dosis.strftime('%Y-%m-%d %H:%M:%S') if obj.fecha_siguiente_dosis else None