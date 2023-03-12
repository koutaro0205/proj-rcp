import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import FormItem, { Props } from '@/components/molecules/FormItem';

export default {
  title: 'components/molecules/FormItem',
  component: FormItem,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'ストーリー',
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    fieldType: {
      control: {
        type: 'radio',
      },
      defaultValue: 'textField',
    },
    fieldWidth: {
      control: {
        type: 'radio',
      },
      defaultValue: 'fluid',
    },
  },
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args: Props) => (
  <FormItem {...args} />
);

export const TextField = Template.bind({});

export const Selector = Template.bind({});
Selector.args = {
  fieldType: 'selector',
  options: [],
  onChangeOption: () => {},
  selectedOptionIndex: 0,
  name: 'name',
};
