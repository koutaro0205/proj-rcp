import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import LinkText from '@/components/atoms/LinkText';

export default {
  title: 'components/atoms/LinkText',
  component: LinkText,
  argTypes: {
    path: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof LinkText>;

const Template: ComponentStory<typeof LinkText> = (args) => (
  <LinkText {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = { path: '/', children: 'テキスト' };
