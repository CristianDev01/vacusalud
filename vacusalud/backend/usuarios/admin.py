from django.contrib import admin
from .models import Empresa, Persona, Acudiente
from django.contrib.auth import get_user_model

user_model = get_user_model()

class EmpresaAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'telefono', 'direccion', 'departamento', 'municipio')
    search_fields = ('usuario__username', 'telefono', 'direccion', 'departamento', 'municipio')
    list_filter = ('departamento', 'municipio')
    ordering = ('usuario',)

    fieldsets = (
        ('Datos de la empresa', {'fields': ('usuario', 'telefono', 'direccion', 'departamento', 'municipio')}),
    )

class PersonaAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'nombre_persona', 'genero_persona', 'rangos_edad', 'fecha_nacimiento', 'direccion')
    search_fields = ('usuario__username', 'nombre_persona', 'direccion')
    list_filter = ('genero_persona', 'rangos_edad', 'departamento', 'municipio')
    ordering = ('nombre_persona',)
    
    fieldsets = (
        ('Datos personales', {'fields': ('usuario', 'nombre_persona', 'genero_persona', 'rangos_edad', 'fecha_nacimiento')}),
        ('Ubicación y datos de contacto', {'fields': ('direccion', 'telefono', 'departamento', 'municipio')}),
        ('Empresa asignada', {'fields': ('empresa',)}),
    )

class AcudienteAdmin(admin.ModelAdmin):
    list_display = ('persona', 'tipos_acudiente', 'nombre_acudiente', 'telefono')
    search_fields = ('persona__usuario__username', 'nombre_acudiente', 'telefono')
    list_filter = ('tipos_acudiente',)
    ordering = ('nombre_acudiente',)

    fieldsets = (
        ('Datos de acudiente', {'fields': ('persona', 'tipos_acudiente', 'nombre_acudiente', 'numero_identificacion_acudiente')}),
        ('Datos de contacto', {'fields': ('telefono',)}),
    )

admin.site.register(Empresa, EmpresaAdmin)
admin.site.register(Persona, PersonaAdmin)
admin.site.register(Acudiente, AcudienteAdmin)
