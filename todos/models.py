from django.db import models


class Todo(models.Model):
    body = models.TextField('本文')
    is_done = models.BooleanField('完了したか')

    def __str__(self):
        return self.body[10]
