import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import IconButton from '@/components/atoms/Button/IconButton';

export default {
  title: 'components/atoms/IconButton',
  component: IconButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'ボタン',
    },
    iconName: {
      control: {
        type: 'select',
      },
      defaultValue: 'diet',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = { label: 'ボタン', path: '/' };
