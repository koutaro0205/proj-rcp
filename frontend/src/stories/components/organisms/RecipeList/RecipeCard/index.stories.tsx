import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import RecipeCard from '@/components/organisms/RecipeList/RecipeCard';

export default {
  title: 'components/organisms/RecipeList/RecipeCard',
  component: RecipeCard,
  argTypes: {
    recipeId: {
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    recipeImage: {
      control: {
        type: 'text',
      },
      defaultValue: '/images/dummy_recipe.jpg',
    },
    postDate: {
      control: {
        type: 'text',
      },
      defaultValue: '2023/3/18',
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: '時間のない朝に！簡単・絶品サンドウィッチ',
    },
    cookTime: {
      control: {
        type: 'text',
      },
      defaultValue: '25分',
    },
    cost: {
      control: {
        type: 'text',
      },
      defaultValue: '300円',
    },
    userId: {
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    userImage: {
      control: {
        type: 'text',
      },
      defaultValue: '/images/dummy_user.jpg',
    },
    userName: {
      control: {
        type: 'text',
      },
      defaultValue: 'ダニエル・リカルド',
    },
  },
} as ComponentMeta<typeof RecipeCard>;

const Template: ComponentStory<typeof RecipeCard> = (args) => (
  <div style={{ display: 'flex', width: 700, gap: 30 }}>
    <RecipeCard {...args} />
    <RecipeCard {...args} />
  </div>
);

export const Normal = Template.bind({});
