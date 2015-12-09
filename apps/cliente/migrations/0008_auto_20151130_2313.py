# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0007_auto_20151130_2256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='apellidos',
            field=models.CharField(max_length=80, null=True, blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='prestamo',
            name='guia_remision',
            field=models.CharField(max_length=8, null=True, blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='prestamo',
            name='vale',
            field=models.CharField(max_length=8, null=True, blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='prestamo',
            name='venta',
            field=models.CharField(max_length=8, null=True, blank=True, default=''),
        ),
    ]
