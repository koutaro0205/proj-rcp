import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Pagination, { Props } from '@/components/molecules/Pagination';

export default {
  title: 'components/molecules/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    totalDataLength: {
      control: {
        type: 'number',
      },
      defaultValue: 99,
    },
    perPage: {
      control: {
        type: 'number',
      },
      defaultValue: 15,
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args: Props) => (
  <Pagination {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = {
  currentPage: 1,
  totalDataLength: 99,
  perPage: 15,
};
