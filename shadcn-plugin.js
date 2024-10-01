import { Builder } from '@builder.io/react';
import * as ShadcnComponents from './components/ui';

Object.entries(ShadcnComponents).forEach(([name, Component]) => {
  Builder.registerComponent(Component, {
    name: `Shadcn${name}`,
    inputs: [
      {
        name: 'className',
        type: 'string',
        defaultValue: '',
        helperText: 'Custom CSS class names'
      },
      // Add more inputs as needed for each component
    ],
  });
});

export const ShadcnPlugin = {
  name: 'shadcn-components',
  id: 'shadcn-components-plugin',
};

export default ShadcnPlugin;