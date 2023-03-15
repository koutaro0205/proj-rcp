import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import StepDetailSection from '@/components/organisms/RecipeDetailSection/StepDetailSection';

const DESCRIPTION =
  '作り方の説明が入ります。作り方の説明が入ります。作り方の説明が入ります。作り方の説明が入ります。作り方の説明が入ります。作り方の説明が入ります。';

const RECIPE_STEPS = [
  { id: 1, stepImage: '', description: DESCRIPTION },
  { id: 2, stepImage: '', description: DESCRIPTION },
  { id: 3, stepImage: '', description: DESCRIPTION },
  { id: 4, stepImage: '', description: DESCRIPTION },
  { id: 5, stepImage: '', description: DESCRIPTION },
  { id: 6, stepImage: '', description: DESCRIPTION },
];

export default {
  title: 'components/organisms/RecipeDetailSection/StepDetailSection',
  component: StepDetailSection,
  argTypes: {
    recipeSteps: {
      control: {
        type: 'array',
      },
      defaultValue: RECIPE_STEPS,
    },
  },
} as ComponentMeta<typeof StepDetailSection>;

const Template: ComponentStory<typeof StepDetailSection> = (args) => (
  <div style={{ width: 750 }}>
    <StepDetailSection {...args} />
  </div>
);

export const Normal = Template.bind({});
