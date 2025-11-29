from datetime import datetime

def success_return(request):
    transaction_id = request.GET.get('collection_id') or request.GET.get('payment_id', 'N/A')
    transaction_date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")  # Inclui hora
    return {
        "transaction_id": transaction_id,
        "transaction_date": transaction_date
    }

def error_return(request):
    transaction_id = request.GET.get('collection_id') or request.GET.get('payment_id', 'N/A')
    transaction_date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    return {
        "transaction_id": transaction_id,
        "transaction_date": transaction_date
    }
