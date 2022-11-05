import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import NavItem from "@/components/atoms/NavItem";
import styles from "@/components/organisms/Header/styles";

export default {
  title: "components/atoms/NavItem",
  component: NavItem,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      defaultValue: "item",
    },
  },
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <ul className={styles.navList}>
    <NavItem {...args} />
    <NavItem {...args} />
    <NavItem {...args} />
  </ul>
);

export const Nomal = Template.bind({});
Nomal.args = { label: "item", path: "/" };
