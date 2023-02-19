import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import IngredientFormItem from '@/components/molecules/IngredientFormList/IngredientFormItem';

export default {
  title: 'components/molecules/IngredientFormList/IngredientFormItem',
  component: IngredientFormItem,
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
} as ComponentMeta<typeof IngredientFormItem>;

const Template: ComponentStory<typeof IngredientFormItem> = (args) => (
  <div style={{ maxWidth: 650 }}>
    <IngredientFormItem {...args} />
  </div>
);

export const Normal = Template.bind({});
