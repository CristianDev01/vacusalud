# Generated by Django 5.1.1 on 2024-09-25 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autenticacion', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='nombre_empresa',
            field=models.CharField(max_length=20, null=True, unique=True),
        ),
    ]
