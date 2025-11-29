import os
import json
import mercadopago
from dotenv import load_dotenv
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .info_payment import success_return, error_return

load_dotenv()

# Inicializa o SDK do Mercado Pago
sdk = mercadopago.SDK(os.getenv("MERCADO_PAGO_ACCESS_TOKEN"))

@csrf_exempt
def create_preference(request):
    if request.method != "POST":
        return JsonResponse({"error": "Use POST"}, status=400)

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "JSON inválido"}, status=400)

    # URL base do frontend React local
    preference_data = {
        "items": data["items"],
        "payer": {
            "email": "TEST_USER_4213484482302912213@testuser.com",
        },
        "back_urls": {
             "success": "https://unsympathizing-septentrional-ciera.ngrok-free.dev/sucesso",
               "failure": "https://unsympathizing-septentrional-ciera.ngrok-free.dev/erro",
               "pending": "https://unsympathizing-septentrional-ciera.ngrok-free.dev/pendente"
        },
        # Não use auto_return para testes locais
    }

    try:
        preference = sdk.preference().create(preference_data)
        print("RESPOSTA COMPLETA DO MERCADO PAGO:", preference)

        init_point = preference.get("response", {}).get("init_point")
        if init_point:
            return JsonResponse({"init_point": init_point}, status=200)
        else:
            error_details = preference.get("response", {}).get("message", "Detalhes não disponíveis.")
            return JsonResponse({
                "error": "Falha ao criar preferência no Mercado Pago.",
                "details": error_details,
                "mp_status": preference.get("status")
            }, status=400)

    except Exception as e:
        print(f"Erro inesperado no Django: {e}")
        return JsonResponse({"error": "Erro interno do servidor Django.", "details": str(e)}, status=500)

def sucesso(request):
    context = success_return(request)
    return render(request, "sucesso.html", context)

def falha(request):
    context = error_return(request)
    return render(request, "erro.html", context)

def pendente(request):
    return render(request, "pendente.html")
