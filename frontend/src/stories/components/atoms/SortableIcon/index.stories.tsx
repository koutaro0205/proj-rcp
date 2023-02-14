import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SortableIcon from '@/components/atoms/SortableIcon';

export default {
  title: 'components/atoms/SortableIcon',
  component: SortableIcon,
} as ComponentMeta<typeof SortableIcon>;

const Template: ComponentStory<typeof SortableIcon> = () => <SortableIcon />;

export const Nomal = Template.bind({});
