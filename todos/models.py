import uuid
from django.db import models


class Todo(models.Model):
    uuid = models.UUIDField('uuid', primary_key=True, default=uuid.uuid4, editable=False)
    body = models.TextField('本文')
    isDone = models.BooleanField('完了したか')

    def __str__(self):
        return self.body[:10]
