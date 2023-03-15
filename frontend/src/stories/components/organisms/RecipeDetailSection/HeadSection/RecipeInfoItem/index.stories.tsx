import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import RecipeInfoItem from '@/components/organisms/RecipeDetailSection/HeadSection/RecipeInfoItem';

export default {
  title: 'components/molecules/HeadSection/RecipeInfoItem',
  component: RecipeInfoItem,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: '調理時間',
    },
    itemValue: {
      control: {
        type: 'text',
      },
      defaultValue: '10分',
    },
  },
} as ComponentMeta<typeof RecipeInfoItem>;

const Template: ComponentStory<typeof RecipeInfoItem> = (args) => (
  <RecipeInfoItem {...args} />
);

export const Normal = Template.bind({});
