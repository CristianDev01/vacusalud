# Generated by Django 5.1.1 on 2024-11-24 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacunacion', '0009_alter_esquemavacunas_fecha_aplicacion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='esquemavacunas',
            name='fecha_aplicacion',
            field=models.DateField(),
        ),
    ]
