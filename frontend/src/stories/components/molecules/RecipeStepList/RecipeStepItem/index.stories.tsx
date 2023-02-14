import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import RecipeStepItem from '@/components/molecules/RecipeStepList/RecipeStepItem';

export default {
  title: 'components/molecules/RecipeStepList/RecipeStepItem',
  component: RecipeStepItem,
  argTypes: {
    inputId: {
      control: {
        type: 'text',
      },
      defaultValue: 'id',
    },
    inputName: {
      control: {
        type: 'text',
      },
      defaultValue: 'name',
    },
    orderIndex: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    onRemoveStep: { action: 'click!!' },
  },
} as ComponentMeta<typeof RecipeStepItem>;

const Template: ComponentStory<typeof RecipeStepItem> = (args) => (
  <div style={{ maxWidth: 650 }}>
    <RecipeStepItem {...args} />
  </div>
);

export const Normal = Template.bind({});
