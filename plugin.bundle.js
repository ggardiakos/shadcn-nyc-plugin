// plugin.bundle.js
(function() {
  var plugin = {
    name: 'shadcn-components',
    id: 'shadcn-components-plugin',
    init: function(builder) {
      // Load the main script
      var script = document.createElement('script');
      script.src = 'https://your-hosting-url.com/dist/main.573b7017437377664925.js';
      script.async = true;
      script.onload = function() {
        if (typeof ShadcnBuilderPlugin !== 'undefined' && ShadcnBuilderPlugin.default) {
          // Register all components
          Object.keys(ShadcnBuilderPlugin.default).forEach(function(componentName) {
            var component = ShadcnBuilderPlugin.default[componentName];
            builder.registerComponent(component, {
              name: 'Shadcn' + componentName,
              inputs: [
                { name: 'className', type: 'string', defaultValue: '' }
                // Add more inputs as needed
              ],
            });
          });
        } else {
          console.error('ShadcnBuilderPlugin not found or invalid');
        }
      };
      document.head.appendChild(script);
    }
  };

  if (typeof Builder !== 'undefined') {
    Builder.registerPlugin(plugin);
  } else {
    console.warn('Builder not found. Make sure this script is loaded after Builder.');
  }
})();