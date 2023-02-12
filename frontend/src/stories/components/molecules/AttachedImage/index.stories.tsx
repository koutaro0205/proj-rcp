import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AttachedImage from '@/components/molecules/AttachedImage';

export default {
  title: 'components/molecules/AttachedImage',
  component: AttachedImage,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      defaultValue: 'mainSize',
    },
  },
} as ComponentMeta<typeof AttachedImage>;

const Template: ComponentStory<typeof AttachedImage> = (args) => (
  <AttachedImage {...args} />
);

export const Nomal = Template.bind({});
