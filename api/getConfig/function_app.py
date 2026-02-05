import azure.functions as func
import os
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    api_key = os.environ.get('AZURE_MAPS_KEY', '')
    
    return func.HttpResponse(
        json.dumps({'apiKey': api_key}),
        status_code=200,
        mimetype='application/json',
        headers={'Content-Type': 'application/json'}
    )
