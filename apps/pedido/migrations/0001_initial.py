# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cliente', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetallePedido',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
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
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('fecha_pedido', models.DateField()),
                ('fecha_entrega', models.DateField()),
                ('nro_pedido', models.CharField(max_length=10)),
                ('cliente', models.ForeignKey(to='cliente.Cliente')),
                ('creador', models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='+')),
                ('detallepedidos', models.ManyToManyField(through='pedido.DetallePedido', to='producto.Producto')),
                ('editor', models.ForeignKey(null=True, blank=True, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='detallepedido',
            name='pedido',
            field=models.ForeignKey(to='pedido.Pedido'),
        ),
        migrations.AddField(
            model_name='detallepedido',
            name='producto',
            field=models.ForeignKey(to='producto.Producto'),
        ),
    ]
