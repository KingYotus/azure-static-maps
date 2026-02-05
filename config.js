// Load Azure Maps API key from API endpoint or local config
(async function() {
  // First, try to load from the API endpoint (production)
  try {
    const response = await fetch('/api/config');
    if (response.ok) {
      const data = await response.json();
      window.AZURE_MAPS_KEY = data.apiKey;
    } else {
      console.warn('Failed to load API key from endpoint');
    }
  } catch (error) {
    console.log('API endpoint not available (expected for local development)');
  }
  
  // If still not set, local-config.js should set it
  if (!window.AZURE_MAPS_KEY) {
    console.warn('AZURE_MAPS_KEY not set - check local-config.js or Azure configuration');
  }
})();
