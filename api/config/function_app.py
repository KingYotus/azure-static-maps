import azure.functions as func
import os
import json

app = func.FunctionApp()

@app.route(route="config", auth_level=func.AuthLevel.ANONYMOUS)
def config(req: func.HttpRequest) -> func.HttpResponse:
    """Return Azure Maps API key from environment"""
    api_key = os.environ.get('AZURE_MAPS_KEY')
    
    if not api_key:
        return func.HttpResponse(
            json.dumps({'error': 'AZURE_MAPS_KEY not configured'}),
            status_code=500,
            mimetype='application/json'
        )
    
    return func.HttpResponse(
        json.dumps({'apiKey': api_key}),
        status_code=200,
        mimetype='application/json'
    )
