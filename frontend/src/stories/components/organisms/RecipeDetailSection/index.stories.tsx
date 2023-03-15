import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import RecipeDetailSection from '@/components/organisms/RecipeDetailSection';

export default {
  title: 'components/organisms/RecipeDetailSection',
  component: RecipeDetailSection,
  // argTypes: {
  //   recipeSteps: {
  //     control: {
  //       type: 'array',
  //     },
  //     defaultValue: DEFAULT_STEP_LIST,
  //   },
  // },
} as ComponentMeta<typeof RecipeDetailSection>;

const Template: ComponentStory<typeof RecipeDetailSection> = (args) => (
  <RecipeDetailSection {...args} />
);

export const Normal = Template.bind({});
