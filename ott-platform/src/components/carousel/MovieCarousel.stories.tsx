import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import MovieCarousel, { MovieCarouselProps } from "./MovieCarousel";
import "./MovieCarousel.css";

export default {
  title: "MovieCarousel",
  component: MovieCarousel,
} as Meta;

const Template: StoryFn<MovieCarouselProps> = (args) => (
  <Router>
    <React.Fragment>
      <MovieCarousel {...args} />
    </React.Fragment>
  </Router>
);

export const AttackonTitan = Template.bind({});
AttackonTitan.args = {
  movies: [
    {
      id: 1,
      title: "Attack on Titan",
      poster_path: "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
      release_date: "2022-01-01",
      media_type: "movie",
    },
  ],
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500/",
  showButtons: false,
};
export const LokiTv = Template.bind({});
LokiTv.args = {
  movies: [
    {
      id: 2,
      title: "Loki",
      poster_path: "/voHUmluYmKyleFkTu3lOXQG702u.jpg",
      release_date: "2021-06-09",
      media_type: "Tv",
    },
  ],
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500/",
  showButtons: false,
};
export const Barbie = Template.bind({});
Barbie.args = {
  movies: [
    {
      id: 3,
      title: "Barbie",
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      release_date: "2023-07-19",
      media_type: "Movie",
    },
  ],
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500/",
  showButtons: false,
};
