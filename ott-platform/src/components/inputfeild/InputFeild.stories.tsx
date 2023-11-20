import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputField, { InputFieldProps } from "./InputFeild";

export default {
  title: "Components/InputFeild",
  component: InputField,
} as Meta;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => (
  <InputField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  type: "text",
  placeholder: "Enter your username",
};

export const Value = Template.bind({});
Value.args = {
  label: "Email",
  type: "email",
  placeholder: "Enter your email",
  value: "example@example.com",
};

export const Error = Template.bind({});
Error.args = {
  label: "Password",
  type: "password",
  placeholder: "Enter your password",
  error: "Password is too short",
};
export const PasswordToggle = Template.bind({});
PasswordToggle.args = {
  label: "Toggle Password",
  type: "password",
  placeholder: "Toggle password visibility",
};
