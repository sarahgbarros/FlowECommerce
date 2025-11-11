
from django.shortcuts import render

def sucesso(request):
    return render(request, "sucesso.html")

def falha(request):
    return render(request, "falha.html")

def pendente(request):
    return render(request, "pendente.html")
