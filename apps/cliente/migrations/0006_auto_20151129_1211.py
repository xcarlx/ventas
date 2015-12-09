# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0005_remove_cliente_ubigeo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='area',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='direccion',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='email',
            field=models.CharField(unique=True, blank=True, max_length=45, null=True),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='responsable',
            field=models.CharField(blank=True, max_length=45, null=True),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='telefono',
            field=models.CharField(unique=True, blank=True, max_length=10, null=True),
        ),
    ]
