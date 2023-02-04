import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import NavItem from '@/components/atoms/NavItem';

export default {
  title: 'components/atoms/NavItem',
  component: NavItem,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'item',
    },
    size: {
      control: {
        type: 'text',
      },
      defaultValue: 'm',
    },
  },
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <div>
    <NavItem {...args} />
    <NavItem {...args} />
    <NavItem {...args} />
  </div>
);

export const Nomal = Template.bind({});
