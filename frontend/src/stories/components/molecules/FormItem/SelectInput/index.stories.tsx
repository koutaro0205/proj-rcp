import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SelectInput from '@/components/molecules/FormItem/SelectInput';

export default {
  title: 'components/molecules/FormItem/SelectInput',
  component: SelectInput,
  argTypes: {
    options: {
      control: {
        type: 'array',
      },
      defaultValue: [],
    },
    initialOptionLabal: {
      control: {
        type: 'text',
      },
      defaultValue: 'label',
    },
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'name',
    },
    selectedOptionIndex: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    onChangeOption: {
      control: {
        type: 'function',
      },
      defaultValue: () => {},
    },
  },
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);

export const Nomal = Template.bind({});
