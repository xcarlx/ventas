# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vale', '0002_auto_20151212_1206'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vale',
            name='fecha',
            field=models.DateField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='vale',
            name='numero',
            field=models.CharField(max_length=10, null=True, blank=True),
        ),
    ]
