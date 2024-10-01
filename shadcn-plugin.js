// shadcn-plugin.js

(function() {
  const shadcnComponents = [
    'Accordion',
    'AlertDialog',
    'AspectRatio',
    'Avatar',
    'Badge',
    'Button',
    'Calendar',
    'Card',
    'Checkbox',
    'Collapsible',
    'Command',
    'ContextMenu',
    'Dialog',
    'DropdownMenu',
    'Form',
    'HoverCard',
    'Input',
    'Label',
    'Menubar',
    'NavigationMenu',
    'Popover',
    'Progress',
    'RadioGroup',
    'ScrollArea',
    'Select',
    'Separator',
    'Sheet',
    'Skeleton',
    'Slider',
    'Switch',
    'Table',
    'Tabs',
    'Textarea',
    'Toast',
    'Toggle',
    'Tooltip'
  ];

  const componentList = shadcnComponents.map(name => ({
    name: `Shadcn${name}`,
    inputs: [
      {
        name: 'className',
        type: 'string',
        defaultValue: '',
        helperText: 'Custom CSS class names'
      },
      // Add more common inputs here if needed
    ],
    // You can add more properties here as needed, such as image, description, etc.
  }));

  const ShadcnPlugin = {
    name: 'shadcn-components',
    id: 'shadcn-components-plugin',
    settings: {
      components: componentList
    }
  };

  // Register the plugin with Builder.io
  if (typeof Builder !== 'undefined') {
    Builder.registerPlugin(ShadcnPlugin);
  } else {
    console.warn('Builder is not defined. Make sure this script is loaded after Builder.');
  }
})();