import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SearchBar, { SearchBarProps } from "./SearchBar";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const ButtonColor = Template.bind({});
ButtonColor.args = {
  onSearch: (query) => {
    console.log("Searching for:", query);
  },
  buttonColor: "#5a6a90",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  onSearch: (query) => {
    console.log("Searching for:", query);
  },
  placeholder: "Find your favorite content",
};

export const PreFilledValue = Template.bind({});
PreFilledValue.args = {
  onSearch: (query) => {
    console.log("Searching for:", query);
  },
  value: "Harry Potter",
};
