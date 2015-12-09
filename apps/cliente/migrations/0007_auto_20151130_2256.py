# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0006_auto_20151129_1211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='apellidos',
            field=models.CharField(blank=True, max_length=80, null=True),
        ),
    ]
