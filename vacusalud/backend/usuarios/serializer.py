from rest_framework import serializers
from .models import Empresa, Persona, Acudiente
from django.contrib.auth import get_user_model

user_model = get_user_model()

class AdministradorSerializer(serializers.ModelSerializer):
  class Meta:
    model = user_model
    fields = ['nombre_empresa']

class EmpresaSerializer(serializers.ModelSerializer):
  class Meta:
    model = user_model
    fields = ['nombre_empresa']

class PersonaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Persona
    fields = ['nombre_persona']

class AcudienteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Acudiente
    fields = '__all__'


class VerEditarEmpresaSerializer(serializers.ModelSerializer):
    telefono = serializers.CharField(source='empresa.telefono', allow_blank=True, allow_null=True)
    direccion = serializers.CharField(source='empresa.direccion', allow_blank=True, allow_null=True)
    departamento = serializers.CharField(source='empresa.departamento', allow_blank=True, allow_null=True)
    municipio = serializers.CharField(source='empresa.municipio', allow_blank=True, allow_null=True)

    class Meta:
        model = user_model
        fields = ['id', 'nombre_empresa', 'username', 'email', 'telefono', 'direccion', 'departamento', 'municipio']

    def update(self, instance, validated_data):
      
      instance.nombre_empresa = validated_data.get('nombre_empresa', instance.nombre_empresa)
      instance.username = validated_data.get('username', instance.username)
      instance.email = validated_data.get('email', instance.email)
      instance.save()

      empresa_data = validated_data.get('empresa')
      if empresa_data:
        empresa_instance, created = Empresa.objects.get_or_create(usuario=instance)

        empresa_instance.telefono = empresa_data.get('telefono', empresa_instance.telefono)
        empresa_instance.direccion = empresa_data.get('direccion', empresa_instance.direccion)
        empresa_instance.departamento = empresa_data.get('departamento', empresa_instance.departamento)
        empresa_instance.municipio = empresa_data.get('municipio', empresa_instance.municipio)
        empresa_instance.save()

      return instance