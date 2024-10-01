import { Builder } from '@builder.io/react';
import React, { useState, useEffect, ComponentType } from 'react';

// Dynamic imports for components
const componentImports = {
  Accordion: () => import('./components/ui/accordion'),
  AlertDialog: () => import('./components/ui/alert-dialog'),
  Alert: () => import('./components/ui/alert'),
  AspectRatio: () => import('./components/ui/aspect-ratio'),
  Avatar: () => import('./components/ui/avatar'),
  Badge: () => import('./components/ui/badge'),
  Button: () => import('./components/ui/button'),
  Calendar: () => import('./components/ui/calendar'),
  Card: () => import('./components/ui/card'),
  Checkbox: () => import('./components/ui/checkbox'),
  Collapsible: () => import('./components/ui/collapsible'),
  Command: () => import('./components/ui/command'),
  ContextMenu: () => import('./components/ui/context-menu'),
  Dialog: () => import('./components/ui/dialog'),
  DropdownMenu: () => import('./components/ui/dropdown-menu'),
  Form: () => import('./components/ui/form'),
  HoverCard: () => import('./components/ui/hover-card'),
  Input: () => import('./components/ui/input'),
  Label: () => import('./components/ui/label'),
  Menubar: () => import('./components/ui/menubar'),
  NavigationMenu: () => import('./components/ui/navigation-menu'),
  Popover: () => import('./components/ui/popover'),
  Progress: () => import('./components/ui/progress'),
  RadioGroup: () => import('./components/ui/radio-group'),
  ScrollArea: () => import('./components/ui/scroll-area'),
  Select: () => import('./components/ui/select'),
  Separator: () => import('./components/ui/separator'),
  Sheet: () => import('./components/ui/sheet'),
  Skeleton: () => import('./components/ui/skeleton'),
  Slider: () => import('./components/ui/slider'),
  Switch: () => import('./components/ui/switch'),
  Table: () => import('./components/ui/table'),
  Tabs: () => import('./components/ui/tabs'),
  Textarea: () => import('./components/ui/textarea'),
  Toast: () => import('./components/ui/toast'),
  Toaster: () => import('./components/ui/toaster'),
  Toggle: () => import('./components/ui/toggle'),
  ToggleGroup: () => import('./components/ui/toggle-group'),
  Tooltip: () => import('./components/ui/tooltip'),
};

// Register all Shadcn components with Builder.io
Object.entries(componentImports).forEach(([name, importFn]) => {
  Builder.registerComponent(
    (props: Record<string, any>) => {
      const [Component, setComponent] = useState<ComponentType<any> | null>(null);

      useEffect(() => {
        importFn().then((module: any) => {
          if (module.default) {
            setComponent(() => module.default);
          } else {
            console.error(`No default export found for ${name}`);
          }
        });
      }, []);

      if (!Component) {
        return null;
      }

      return React.createElement(Component, props);
    },
    {
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
    }
  );
});

// Export the plugin configuration
export const ShadcnPlugin = {
  name: 'shadcn-components',
  id: 'shadcn-components-plugin',
};

export default ShadcnPlugin;
