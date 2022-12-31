import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import TabItem from '@/components/molecules/TabItem';

export default {
  title: 'components/molecules/TabItem',
  component: TabItem,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'label',
    },
    path: {
      control: {
        type: 'text',
      },
      defaultValue: '/',
    },
  },
} as ComponentMeta<typeof TabItem>;

const Template: ComponentStory<typeof TabItem> = (args) => (
  <div>
    <TabItem {...args} />
    <TabItem {...args} />
    <TabItem {...args} />
    <TabItem {...args} />
  </div>
);

export const Nomal = Template.bind({});
Nomal.args = { label: 'ラベル', path: '/' };
