import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import MovieDetails from "./MovieDetails";

export default {
  title: "Pages/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/movie/details/123"]}>
        {Story()}
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <MovieDetails />;

export const Default = Template.bind({});
Default.args = {};

export const WithMovieData = Template.bind({});
WithMovieData.args = {
  movieDetails: {
    id: 123,
    title: "Sample Movie",
    poster_path: "/sample-poster.jpg",
    release_date: "2023-01-01",
    media_type: "movie",
    vote_average: 7.5,
    original_language: "en",
    overview: "This is a sample movie overview.",
    genre_ids: [1, 2, 3],
    status: "Released",
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Drama" },
      { id: 3, name: "Comedy" },
    ],
    IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500/",
  },
};
