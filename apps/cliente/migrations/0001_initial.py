# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('nombres', models.CharField(max_length=150)),
                ('apellidos', models.CharField(max_length=80)),
                ('tipo_documento', models.CharField(choices=[('DNI', 'DNI'), ('RUC', 'RUC')], max_length=3, default='DNI')),
                ('nro_documento', models.CharField(unique=True, max_length=11)),
                ('email', models.CharField(unique=True, max_length=45)),
                ('telefono', models.CharField(unique=True, max_length=10)),
                ('direccion', models.CharField(max_length=150)),
                ('area', models.CharField(max_length=200)),
                ('responsable', models.CharField(max_length=45)),
                ('ubigeo', models.CharField(null=True, blank=True, max_length=6)),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('editor', models.ForeignKey(to=settings.AUTH_USER_MODEL, blank=True, null=True, related_name='+')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TipoCliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('nombre', models.CharField(max_length=45)),
                ('descripcion', models.CharField(max_length=500)),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('editor', models.ForeignKey(to=settings.AUTH_USER_MODEL, blank=True, null=True, related_name='+')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='cliente',
            name='tipocliente',
            field=models.ForeignKey(to='cliente.TipoCliente'),
        ),
    ]
