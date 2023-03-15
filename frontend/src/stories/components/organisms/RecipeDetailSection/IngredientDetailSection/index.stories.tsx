import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import IngredientDetailSection from '@/components/organisms/RecipeDetailSection/IngredientDetailSection';

const RECIPE_INGREDIENTS = [
  { id: 1, name: '小麦粉', quantity: '100g' },
  { id: 2, name: '小麦粉', quantity: '100g' },
  { id: 3, name: '小麦粉', quantity: '100g' },
  { id: 4, name: '小麦粉', quantity: '100g' },
  { id: 5, name: '小麦粉', quantity: '100g' },
  { id: 6, name: '小麦粉', quantity: '100g' },
];

export default {
  title: 'components/organisms/RecipeDetailSection/IngredientDetailSection',
  component: IngredientDetailSection,
  argTypes: {
    servingSize: {
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    recipeIngredients: {
      control: {
        type: 'array',
      },
      defaultValue: RECIPE_INGREDIENTS,
    },
  },
} as ComponentMeta<typeof IngredientDetailSection>;

const Template: ComponentStory<typeof IngredientDetailSection> = (args) => (
  <div style={{ width: 750 }}>
    <IngredientDetailSection {...args} />
  </div>
);

export const Normal = Template.bind({});
