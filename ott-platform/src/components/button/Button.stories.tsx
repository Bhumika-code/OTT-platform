import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const signin = Template.bind({});
signin.args = {
  label: "signin",
  color: "#BB261A",
};
export const signup = Template.bind({});
signup.args = {
  label: "signup",
  color: "#BB261A",
};
export const Enabled = Template.bind({});
Enabled.args = {
  label: "Enabled Button",
  color: "#BB261A",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  color: "#888888",
  disabled: true,
};
