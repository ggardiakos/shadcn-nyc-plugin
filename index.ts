import * as shadcnComponents from './components';

const componentList = Object.keys(shadcnComponents).map(name => ({
  name: `Shadcn${name}`,
  inputs: [
    {
      name: 'className',
      type: 'string',
      defaultValue: '',
      helperText: 'Custom CSS class names',
    },
    // Add more common inputs here
  ],
  // You can add more properties here as needed, such as image, description, etc.
}));

export const ShadcnPlugin = {
  name: 'shadcn-components',
  id: 'shadcn-components-plugin',
  settings: {
    components: componentList,
  },
};

export default ShadcnPlugin;
