# Generated by Django 5.1.1 on 2024-11-22 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacunacion', '0005_alter_vacunas_edad_alter_vacunas_intervalo'),
    ]

    operations = [
        migrations.AddField(
            model_name='esquemavacunas',
            name='fecha_aplicacion',
            field=models.DateField(default='2024-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='esquemavacunas',
            name='fecha_siguiente_dosis',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='esquemavacunas',
            name='numero_dosis_aplicada',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='esquemavacunas',
            name='observacion',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='esquemavacunas',
            name='siguiente_dosis',
            field=models.CharField(choices=[('aplica', 'Aplica'), ('no aplica', 'No Aplica')], default='no aplica', max_length=15),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='DosisAplicadas',
        ),
    ]
