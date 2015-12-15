# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('vale', '0004_auto_20151213_1622'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vale',
            name='fecha',
            field=models.DateField(blank=True, default=django.utils.timezone.now),
        ),
    ]
