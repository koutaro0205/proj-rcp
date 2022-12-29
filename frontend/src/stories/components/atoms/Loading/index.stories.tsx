import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Loading from '@/components/atoms/Loading';

export default {
  title: 'components/atoms/Loading',
  component: Loading,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = { children: 'Loading...' };
