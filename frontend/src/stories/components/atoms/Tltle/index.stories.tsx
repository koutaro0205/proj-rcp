import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Title from '@/components/atoms/Title';

export default {
  title: 'components/atoms/Title',
  component: Title,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'テキスト',
    },
    color: {
      control: {
        type: 'radio',
      },
      defaultValue: 'black',
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>【絶品】おすすめナポリタン</Title>
);

export const Normal = Template.bind({});
Normal.args = {
  size: 'l',
};

export const MqSize = Template.bind({});
MqSize.args = {
  size: ['s', 'm', 'l'],
};
