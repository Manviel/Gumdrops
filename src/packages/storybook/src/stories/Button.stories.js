import { Button } from '@gumdrops/core';

export default {
  title: 'Core/Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() { return { args }; },
  template: '<Button v-bind="args">{{ args.default || "Click me" }}</Button>',
});

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  default: 'Click me'
};

Playground.argTypes = {
  variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'link'] },
  size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  disabled: { control: 'boolean' },
  type: { control: { type: 'select' }, options: ['button', 'submit', 'reset'] },
  default: { control: 'text', name: 'label' }
};
