from django.urls import path
from . import views

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("sucesso/", views.sucesso, name="sucesso"),
    path("erro/", views.falha, name="falha"),
    path("pendente/", views.pendente, name="pendente"),
]
