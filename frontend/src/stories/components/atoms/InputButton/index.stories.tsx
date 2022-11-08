import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import InputButton from '@/components/atoms/InputButton';

export default {
  title: 'components/atoms/InputButton',
  component: InputButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'ストーリー',
    },
  },
} as ComponentMeta<typeof InputButton>;

const Template: ComponentStory<typeof InputButton> = (args) => (
  <InputButton {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = {
  text: '検索',
};
