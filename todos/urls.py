from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from .views import ListTodo


router = routers.SimpleRouter()
router.register(r'todos', ListTodo)

urlpatterns = [
    path('', include(router.urls))
]
