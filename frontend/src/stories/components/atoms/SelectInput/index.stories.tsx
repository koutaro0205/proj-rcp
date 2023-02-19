import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SelectInput from '@/components/molecules/FormItem/SelectInput';

const data = [
  { id: 1, name: '野菜' },
  { id: 2, name: '肉' },
  { id: 2, name: '乳製品' },
];
export default {
  title: 'components/atoms/SelectInput',
  component: SelectInput,
  argTypes: {
    array: {
      control: {
        type: 'text',
      },
      defaultValue: data,
    },
  },
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);

export const Nomal = Template.bind({});
