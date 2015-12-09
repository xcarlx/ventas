# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pedido', '0001_initial'),
        ('producto', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetalleVenta',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('cantidad', models.PositiveSmallIntegerField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('descuento', models.DecimalField(decimal_places=2, max_digits=10)),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('editor', models.ForeignKey(blank=True, related_name='+', to=settings.AUTH_USER_MODEL, null=True)),
                ('producto', models.ForeignKey(to='producto.Producto')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('fecha', models.DateField()),
                ('tipo_documento', models.CharField(max_length=7, default='BOLETA', choices=[('BOLETA', 'BOLETA'), ('FACTURA', 'FACTURA')])),
                ('numero_documento', models.CharField(max_length=10)),
                ('numero_correlativo', models.CharField(max_length=4)),
                ('sub_total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('igv', models.DecimalField(decimal_places=2, max_digits=10)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('cliente', models.ForeignKey(to='cliente.Cliente')),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('detalleventas', models.ManyToManyField(through='venta.DetalleVenta', to='producto.Producto')),
                ('editor', models.ForeignKey(blank=True, related_name='+', to=settings.AUTH_USER_MODEL, null=True)),
                ('pedido', models.ForeignKey(to='pedido.Pedido')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='detalleventa',
            name='venta',
            field=models.ForeignKey(to='venta.Venta'),
        ),
    ]
