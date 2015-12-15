# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vale', '0003_auto_20151213_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vale',
            name='fecha',
            field=models.DateField(default='2015-01-12', auto_now_add=True),
            preserve_default=False,
        ),
    ]
