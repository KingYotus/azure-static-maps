// Load Azure Maps API key from environment
(function() {
  // This will be injected by Azure Static Web Apps via application settings
  // or loaded from local-config.js for local development
  if (!window.AZURE_MAPS_KEY) {
    console.warn('AZURE_MAPS_KEY environment variable not set');
  }
})();
