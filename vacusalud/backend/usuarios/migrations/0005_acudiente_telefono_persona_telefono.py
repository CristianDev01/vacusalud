# Generated by Django 5.1.1 on 2024-11-22 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0004_alter_empresa_departamento_alter_empresa_direccion_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='acudiente',
            name='telefono',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='persona',
            name='telefono',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
