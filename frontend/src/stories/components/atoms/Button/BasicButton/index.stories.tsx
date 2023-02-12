import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import BasicButton from '@/components/atoms/Button/BasicButton';

export default {
  title: 'components/atoms/Button/BasicButton',
  component: BasicButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'ボタンテキスト',
    },
    onClick: { action: 'click' },
    color: {
      control: {
        type: 'select',
      },
      defaultValue: 'black',
    },
    fontSize: {
      control: {
        type: 'select',
      },
      defaultValue: 'm',
    },
    backgroundColor: {
      control: {
        type: 'select',
      },
      defaultValue: 'alto',
    },
    isCircle: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isTransparent: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = (args) => (
  <BasicButton {...args} />
);

export const Nomal = Template.bind({});
