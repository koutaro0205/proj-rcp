import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Checkbox from '@/components/atoms/Checkbox';

export default {
  title: 'components/atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      defaultValue: 'm',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'パスワードを表示',
    },
    isChecked: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Nomal = Template.bind({});
