# Generated by Django 2.1.5 on 2019-01-26 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField(verbose_name='本文')),
                ('is_done', models.BooleanField(verbose_name='完了したか')),
            ],
        ),
    ]