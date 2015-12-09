# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('venta', '0001_initial'),
        ('cliente', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('producto', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetalleVale',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, primary_key=True, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('cantidad', models.PositiveSmallIntegerField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('creador', models.ForeignKey(related_name='+', to=settings.AUTH_USER_MODEL)),
                ('editor', models.ForeignKey(related_name='+', null=True, to=settings.AUTH_USER_MODEL, blank=True)),
                ('producto', models.ForeignKey(to='producto.Producto')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Vale',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, primary_key=True, verbose_name='ID')),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('fecha', models.DateField()),
                ('numero', models.CharField(max_length=10)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('observaciones', models.TextField()),
                ('cliente', models.ForeignKey(to='cliente.Cliente')),
                ('creador', models.ForeignKey(related_name='+', to=settings.AUTH_USER_MODEL)),
                ('detallevales', models.ManyToManyField(to='producto.Producto', through='vale.DetalleVale')),
                ('editor', models.ForeignKey(related_name='+', null=True, to=settings.AUTH_USER_MODEL, blank=True)),
                ('venta', models.ForeignKey(null=True, to='venta.Venta', blank=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='detallevale',
            name='vale',
            field=models.ForeignKey(to='vale.Vale'),
        ),
    ]
