import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import DeleteButton from '@/components/atoms/Button/DeleteButton';

export default {
  title: 'components/atoms/Button/DeleteButton',
  component: DeleteButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: '削除',
    },
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof DeleteButton>;

const Template: ComponentStory<typeof DeleteButton> = (args) => (
  <DeleteButton {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = { label: '削除' };
