# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('producto', '0001_initial'),
        ('cliente', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, primary_key=True, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('cantidad_entrega', models.PositiveSmallIntegerField()),
                ('cantidad_devuelta', models.PositiveSmallIntegerField()),
                ('cliente', models.ForeignKey(to='cliente.Cliente')),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('editor', models.ForeignKey(to=settings.AUTH_USER_MODEL, blank=True, related_name='+', null=True)),
                ('producto', models.ForeignKey(to='producto.Producto')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='cliente',
            name='prestamos',
            field=models.ManyToManyField(to='producto.Producto', through='cliente.Prestamo'),
        ),
    ]
