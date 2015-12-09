# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('producto', '0001_initial'),
        ('cliente', '0001_initial'),
        ('venta', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetalleGuia',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('cantidad', models.PositiveSmallIntegerField()),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('editor', models.ForeignKey(null=True, blank=True, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='GuiaRemision',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('punto_partida', models.CharField(max_length=500)),
                ('punto_llegada', models.CharField(max_length=500)),
                ('fecha_emision', models.DateField()),
                ('fecha_translado', models.DateField()),
                ('cliente', models.ForeignKey(to='cliente.Cliente')),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('detalleguias', models.ManyToManyField(through='guia.DetalleGuia', to='producto.Producto')),
                ('editor', models.ForeignKey(null=True, blank=True, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('venta', models.ForeignKey(null=True, blank=True, to='venta.Venta')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='detalleguia',
            name='guia_remision',
            field=models.ForeignKey(to='guia.GuiaRemision'),
        ),
        migrations.AddField(
            model_name='detalleguia',
            name='producto',
            field=models.ForeignKey(to='producto.Producto'),
        ),
    ]
