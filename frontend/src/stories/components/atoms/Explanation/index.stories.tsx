import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Explanation from "@/components/atoms/Explanation";

export default {
  title: "components/atoms/Explanation",
  component: Explanation,
  argTypes: {
    message: {
      control: {
        type: "text",
      },
      defaultValue: "ストーリー",
    },
  },
} as ComponentMeta<typeof Explanation>;

const Template: ComponentStory<typeof Explanation> = (args) => (
  <Explanation {...args} />
);

export const Nomal = Template.bind({});
Nomal.args = { message: "ここにメッセージが表示されます。" };
