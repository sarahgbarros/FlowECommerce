import mercadopago
import os
from dotenv import load_dotenv

load_dotenv()

# Use ACCESS_TOKEN do modo sandbox
sdk = mercadopago.SDK(os.getenv("MERCADO_PAGO_ACCESS_TOKEN"))

# Lista de produtos
produtos = [
    {"id": 1, "title": "Fone de Ouvido", "unit_price": 75.76},
    {"id": 2, "title": "Carregador", "unit_price": 30.25}
]

preferencias = {}

for produto in produtos:
    preference_data = {
        "items": [
            {
                "title": produto["title"],
                "quantity": 1,
                "unit_price": float(produto["unit_price"]),
                "currency_id": "BRL"
            }
        ],
        "back_urls": {
            "success": "https://abcd1234.ngrok.io/sucesso",
            "failure": "https://abcd1234.ngrok.io/erro",
            "pending": "https://abcd1234.ngrok.io/pendente"
        },
        "auto_return": "approved",
        "payment_methods": {
            "excluded_payment_types": [],  # aceita todos, incluindo Pix
            "installments": 1
        }
    }

   
    response = sdk.preference().create(preference_data)

    preference_id = response.get("response", {}).get("id")

    init_point = response.get("response", {}).get("init_point")

    if preference_id:
        preferencias[produto["id"]] = {"id": preference_id, "link": init_point}
    else:
        print(f"Não foi possível criar a preferência para {produto['title']}: {response}")


for pid, data in preferencias.items():
    print(f"Produto {pid} -> Preference ID: {data['id']}, Link: {data['link']}")
