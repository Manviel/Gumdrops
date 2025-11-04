import { Typography } from '@gumdrops/core';

export default {
  title: 'Core/Typography',
  component: Typography,
};

const Template = (args) => ({
  components: { Typography },
  setup() { return { args }; },
  template: '<Typography v-bind="args">{{ args.default || "Typography sample" }}</Typography>',
});

export const Playground = Template.bind({});
Playground.args = {
  tag: 'p',
  variant: 'body',
  size: 'md',
  default: 'The quick brown fox jumps over the lazy dog.'
};

Playground.argTypes = {
  tag: { control: { type: 'select' }, options: ['p', 'span', 'h1', 'h2', 'h3'] },
  variant: { control: { type: 'select' }, options: ['body', 'title', 'lead', 'muted'] },
  size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  default: { control: 'text', name: 'text' }
};
