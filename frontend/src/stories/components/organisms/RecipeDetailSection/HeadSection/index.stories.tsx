import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import HeadSection from '@/components/organisms/RecipeDetailSection/HeadSection';

export default {
  title: 'components/organisms/RecipeDetailSection/HeadSection',
  component: HeadSection,
  argTypes: {
    recipeTitle: {
      control: {
        type: 'text',
      },
      defaultValue:
        'レシピのタイトルが入りますレシピのタイトルが入りますレシピのタイトルが入ります',
    },
    imageUrl: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    categories: {
      control: {
        type: 'array',
      },
      defaultValue: ['カテゴリ1', 'カテゴリ2'],
    },
    cookTime: {
      control: {
        type: 'text',
      },
      defaultValue: '10分',
    },
    cost: {
      control: {
        type: 'text',
      },
      defaultValue: '500円',
    },
    postDate: {
      control: {
        type: 'text',
      },
      defaultValue: '2023/02/23',
    },
    isLiked: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    onClickLikeButton: {
      control: {
        type: 'function',
      },
      defaultValue: { action: 'clicked' },
    },
    likeCount: {
      control: {
        type: 'number',
      },
      defaultValue: 100,
    },
  },
} as ComponentMeta<typeof HeadSection>;

const Template: ComponentStory<typeof HeadSection> = (args) => (
  <div style={{ width: 750 }}>
    <HeadSection {...args} />
  </div>
);

export const Normal = Template.bind({});
