import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCarousel from "./MovieCarousel";

const mockData = [
  {
    id: 1,
    title: "jawan",
    poster_path: "/poster1.jpg",
    release_date: "2022-01-01",
    media_type: "movie",
  },
];

test("List renders successfully", () => {
  render(
    <BrowserRouter>
      <MovieCarousel movies={mockData} />
    </BrowserRouter>
  );

  const elements = screen.getAllByText(/jawan/i);
  expect(elements).toHaveLength(2);
});
