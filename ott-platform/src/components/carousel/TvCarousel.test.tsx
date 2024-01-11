import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TvCarousel from "./TvCarousel";

const sampleTvSeries = [
  {
    id: 1,
    title: "Sample TV Show",
    poster_path: "/sample-poster.jpg",
    release_date: "2023-01-01",
    media_type: "tv",
    first_air_date: "2023-01-01",
    name: "Sample TV Show",
  },
];

test("List renders successfully", () => {
  render(
    <BrowserRouter>
      <TvCarousel Tvseries={sampleTvSeries} />
    </BrowserRouter>
  );

  const elements = screen.getAllByText(/Sample TV Show/i);
  expect(elements).toHaveLength(2);
});

test("Adjusts display on window resize", () => {
  render(
    <BrowserRouter>
      <TvCarousel Tvseries={sampleTvSeries} />
    </BrowserRouter>
  );

  global.innerWidth = 500;
  fireEvent(window, new Event("resize"));
});
