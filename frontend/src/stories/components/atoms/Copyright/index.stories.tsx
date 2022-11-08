import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Copyright from '@/components/atoms/Copyright';

export default {
  title: 'components/atoms/Copyright',
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = () => <Copyright />;

export const Nomal = Template.bind({});
