import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import RecipeList from '@/components/organisms/RecipeList';
import { RECIPES } from '@/stories/common/dummy/recipes';

export default {
  title: 'components/organisms/RecipeList',
  component: RecipeList,
  argTypes: {
    recipes: {
      control: {
        type: 'array',
      },
      defaultValue: RECIPES,
    },
  },
} as ComponentMeta<typeof RecipeList>;

const Template: ComponentStory<typeof RecipeList> = (args) => (
  <div style={{ width: 850 }}>
    <RecipeList {...args} />
  </div>
);

export const Normal = Template.bind({});

export const Empty = Template.bind({});
Empty.args = {
  recipes: [],
};
