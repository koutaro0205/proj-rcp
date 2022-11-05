import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import InputField from "@/components/atoms/InputField";

export default {
  title: "components/atoms/InputField",
  component: InputField,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    placeholder: {
      control: {
        type: "text",
      },
      defaultValue: "キーワードを入力",
    },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <div style={{ height: "34px" }}>
    <InputField {...args} />
  </div>
);

export const Nomal = Template.bind({});
Nomal.args = { name: "keyword", placeholder: "キーワードを入力" };
