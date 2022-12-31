import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Text from '@/components/atoms/Text';

export default {
  title: 'components/atoms/Text',
  component: Text,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'テキスト',
    },
    textAlign: {
      control: {
        type: 'position',
      },
      defaultValue: 'left',
    },
    lineHeight: {
      control: {
        type: 'size',
      },
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>テキスト</Text>
);

export const Nomal = Template.bind({});
Nomal.args = {};

export const Center = Template.bind({});
Center.args = { textAlign: 'center' };

export const Background = Template.bind({});
Background.args = { backgroundColor: 'background' };
