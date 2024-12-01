from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

user = get_user_model()

class CustomUserAdmin(UserAdmin):
    list_display = ('tipos_usuario', 'username', 'email',)
    

    fieldsets = (
        ('Credenciales', {'fields': ('username', 'email', 'tipos_documento', 'numero_identificacion', 'password')}),

        ('Información de usuario', {'fields': ('tipos_usuario', 'nombre_empresa')}),

        ('Permisos', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Fechas', {'fields': ('last_login', 'date_joined')}),
    )

    exclude = ('first_name', 'last_name',)

admin.site.register(user, CustomUserAdmin)