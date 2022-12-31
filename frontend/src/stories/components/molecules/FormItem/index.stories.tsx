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
  },
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args: Props) => (
  <div style={{ width: '50%' }}>
    <FormItem {...args} />
    <FormItem {...args} />
    <FormItem {...args} />
  </div>
);

export const Nomal = Template.bind({});
Nomal.args = {
  label: 'label',
  id: 'id',
  type: 'type',
  name: 'name',
};
