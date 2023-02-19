import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import IngredientFormList from '@/components/molecules/IngredientFormList';
import { IngredientItem } from '@/components/molecules/IngredientFormList/useIngredientFormList';

const DEFAULT_STEP_LIST: IngredientItem[] = [
  { id: '材料1', ingredient: '作り方1', quantity: '分量' },
  { id: '材料2', ingredient: '作り方1', quantity: '分量' },
  { id: '材料3', ingredient: '作り方1', quantity: '分量' },
];
export default {
  title: 'components/molecules/IngredientFormList',
  component: IngredientFormList,
  argTypes: {
    ingredieints: {
      control: {
        type: 'array',
      },
      defaultValue: DEFAULT_STEP_LIST,
    },
  },
} as ComponentMeta<typeof IngredientFormList>;

const Template: ComponentStory<typeof IngredientFormList> = (args) => (
  <div style={{ maxWidth: 650 }}>
    <IngredientFormList {...args} />
  </div>
);

export const Normal = Template.bind({});
