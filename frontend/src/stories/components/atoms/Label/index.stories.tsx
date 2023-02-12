import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Label from '@/components/atoms/Label';

export default {
  title: 'components/atoms/Label',
  component: Label,
  argTypes: {
    pattern: {
      control: {
        type: 'radio',
      },
      defaultValue: 'required',
    },
    size: {
      control: {
        type: 'radio',
      },
      defaultValue: 'xxs',
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  pattern: 'required',
};

export const NewLabel = Template.bind({});
NewLabel.args = {
  pattern: 'new',
};
