import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import FormLabel from '@/components/molecules/FormItem/FormLabel';

export default {
  title: 'components/molecules/FormItem/FormLabel',
  component: FormLabel,
  argTypes: {
    htmlFor: {
      control: {
        type: 'text',
      },
      defaultValue: 'id',
    },
  },
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
  <FormLabel {...args}>ラベル</FormLabel>
);

export const Normal = Template.bind({});
