import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import HeaderButton from '@/components/atoms/Button/HeaderButton';
import styles from '@/components/organisms/Header/styles';

export default {
  title: 'components/atoms/HeaderButton',
  component: HeaderButton,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'ボタン',
    },
  },
} as ComponentMeta<typeof HeaderButton>;

const Template: ComponentStory<typeof HeaderButton> = (args) => (
  <ul className={styles.menuList}>
    <HeaderButton {...args} />
  </ul>
);

export const Nomal = Template.bind({});
Nomal.args = { label: 'ボタン', path: '/' };
