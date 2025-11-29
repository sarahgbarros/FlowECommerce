from django.urls import path
from . import views

urlpatterns = [
   
    path("create-preference/", views.create_preference),
    path("sucesso/", views.sucesso, name="sucesso"),
    path("erro/", views.falha, name="erro"),
    path("pendente/", views.pendente, name="pendente"),
]
