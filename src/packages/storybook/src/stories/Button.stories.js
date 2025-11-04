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

export const Primary = Template.bind({});
Primary.args = {};
