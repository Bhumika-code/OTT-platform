import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import TvGenre, { TvGenreProps } from "../../pages/tvgenre/TvGenre";

export default {
  title: "Components/TvGenre",
  component: TvGenre,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
} as Meta;

const Template: StoryFn<
  TvGenreProps & { genreColors: { genre: string; color: string }[] }
> = (
  args: TvGenreProps & { genreColors: { genre: string; color: string }[] }
) => <TvGenre {...args} />;

export const CustomColors = Template.bind({});
CustomColors.args = {
  genreColors: [
    {
      genre: "action&adventure",
      color: "#0f766e",
    },
    {
      genre: "animation",
      color: "#171e31",
    },
    {
      genre: "comedy",
      color: "#0f766e",
    },

    {
      genre: "crime",
      color: "#171e31",
    },
    {
      genre: "documentary",
      color: "#0f766e",
    },
    {
      genre: "drama",
      color: "#171e31",
    },
    {
      genre: "family",
      color: "#0f766e",
    },
    {
      genre: "kids",
      color: "#171e31",
    },

    {
      genre: "mystory",
      color: "#0f766e",
    },
    {
      genre: "news",
      color: "black",
    },
    {
      genre: "reality",
      color: "##0f766e",
    },
    {
      genre: "sci-fi & fantasy",
      color: "#171e31",
    },
    {
      genre: "soap",
      color: "#0f766e",
    },
    {
      genre: "talk",
      color: "#171e31",
    },
    {
      genre: "war&politics",
      color: "#0f766e",
    },
    {
      genre: "western",
      color: "#171e31",
    },
  ],
};
