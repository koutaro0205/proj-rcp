import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SearchField from '@/components/atoms/SearchField';

export default {
  title: 'components/atoms/SearchField',
  component: SearchField,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'キーワードを入力',
    },
  },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <div style={{ height: '34px' }}>
    <SearchField {...args} />
  </div>
);

export const Nomal = Template.bind({});
Nomal.args = { name: 'keyword', placeholder: 'キーワードを入力' };
