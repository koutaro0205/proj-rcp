import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import LikeCountButton from '@/components/atoms/LikeCountButton';

export default {
  title: 'components/atoms/LikeCountButton',
  component: LikeCountButton,
  argTypes: {
    onPress: {
      control: {
        type: 'function',
      },
      defaultValue: { action: 'clicked' },
    },
    likeCount: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    isLiked: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof LikeCountButton>;

const Template: ComponentStory<typeof LikeCountButton> = (args) => (
  <LikeCountButton {...args} />
);

export const Normal = Template.bind({});
