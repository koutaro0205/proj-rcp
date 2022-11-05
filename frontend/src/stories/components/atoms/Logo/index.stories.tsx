import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Logo from "@/components/atoms/Logo";

export default {
  title: "components/atoms/Logo",
  component: Logo,
  argTypes: {
    logoText: {
      control: {
        type: "text",
      },
      defaultValue: "ロゴ",
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Nomal = Template.bind({});
Nomal.args = { logoText: "ZuboRecipes", path: "/" };
