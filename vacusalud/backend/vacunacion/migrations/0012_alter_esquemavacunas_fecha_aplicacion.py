# Generated by Django 5.1.1 on 2024-11-24 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacunacion', '0011_alter_esquemavacunas_fecha_aplicacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='esquemavacunas',
            name='fecha_aplicacion',
            field=models.DateField(auto_now_add=True),
        ),
    ]
