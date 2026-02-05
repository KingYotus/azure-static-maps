// Load Azure Maps API key from environment variable endpoint
(async function() {
  try {
    const response = await fetch('/api/config');
    if (response.ok) {
      const data = await response.json();
      window.AZURE_MAPS_KEY = data.apiKey;
    } else {
      console.warn('API endpoint not available (local development)');
    }
  } catch (error) {
    console.log('API endpoint not available (local development)');
  }
  
  if (!window.AZURE_MAPS_KEY) {
    console.warn('AZURE_MAPS_KEY not set - load local-config.js for testing');
  }
})();
