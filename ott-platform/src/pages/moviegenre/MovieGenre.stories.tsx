import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import MovieGenre, { MovieGenreProps } from "../moviegenre/MovieGenre";

export default {
  title: "Components/MovieGenre",
  component: MovieGenre,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
} as Meta;

const Template: StoryFn<
  MovieGenreProps & { genreColors: { genre: string; color: string }[] }
> = (
  args: MovieGenreProps & { genreColors: { genre: string; color: string }[] }
) => <MovieGenre {...args} />;

export const CustomColors = Template.bind({});
CustomColors.args = {
  genreColors: [
    {
      genre: "action",
      color: "#0e7490",
    },
    {
      genre: "adventure",
      color: "#171e31",
    },
    {
      genre: "animation",
      color: "#0e7490",
    },
    {
      genre: "comedy",
      color: "#171e31",
    },
    {
      genre: "crime",
      color: "#0e7490",
    },
    {
      genre: "documentary",
      color: "#171e31",
    },
    {
      genre: "drama",
      color: "#0e7490",
    },
    {
      genre: "family",
      color: "#171e31",
    },
    {
      genre: "fantasy",
      color: "#0e7490",
    },
    {
      genre: "history",
      color: "#171e31",
    },
    {
      genre: "horror",
      color: "#0e7490",
    },
    {
      genre: "music",
      color: "#171e31",
    },
    {
      genre: "mystory",
      color: "#0e7490",
    },
    {
      genre: "romance",
      color: "black",
    },
    {
      genre: "science fiction",
      color: "#0e7490",
    },
    {
      genre: "tv mobile",
      color: "#171e31",
    },
    {
      genre: "thriller",
      color: "#0e7490",
    },
    {
      genre: "war",
      color: "#171e31",
    },
    {
      genre: "western",
      color: "#0e7490",
    },
  ],
};
