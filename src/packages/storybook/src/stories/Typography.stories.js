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

export const Default = Template.bind({});
Default.args = {};
