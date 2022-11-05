import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Input from "@/components/atoms/Input";

export default {
  title: "components/atoms/Input",
  component: Input,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      defaultValue: "ストーリー",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Nomal = Template.bind({});
Nomal.args = {
  text: "検索",
};
