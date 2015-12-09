# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0002_auto_20151102_0359'),
    ]

    operations = [
        migrations.AddField(
            model_name='prestamo',
            name='guia_remision',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='prestamo',
            name='vale',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='prestamo',
            name='venta',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
    ]
