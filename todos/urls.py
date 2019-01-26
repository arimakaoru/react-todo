from django.urls import path

from .views import ListTodo

urlpatterns = [
    path('', ListTodo.as_view()),
]