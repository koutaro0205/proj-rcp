import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import RecipeStepList from '@/components/molecules/RecipeStepList';

const DEFAULT_STEP_LIST = [
  { id: 'step1', body: '作り方1' },
  { id: 'step2', body: '作り方1' },
  { id: 'step3', body: '作り方1' },
];
export default {
  title: 'components/molecules/RecipeStepList',
  component: RecipeStepList,
  argTypes: {
    recipeSteps: {
      control: {
        type: 'array',
      },
      defaultValue: DEFAULT_STEP_LIST,
    },
  },
} as ComponentMeta<typeof RecipeStepList>;

const Template: ComponentStory<typeof RecipeStepList> = (args) => (
  <div style={{ maxWidth: 650 }}>
    <RecipeStepList {...args} />
  </div>
);

export const Normal = Template.bind({});
