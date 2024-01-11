import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookMark from "../BookMarks/BookMark";
import { MemoryRouter } from "react-router-dom";

test("renders BookMark component", () => {
  render(
    <MemoryRouter>
      <BookMark />
    </MemoryRouter>
  );
});
test("renders Bookmarked Movies", () => {
  const bookmarkedMovies = [
    {
      id: 1,
      title: "Movie 1",
      poster_path: "/poster1.jpg",
      release_date: "2022-01-01",
      media_type: "movie",
    },
    {
      id: 2,
      title: "Movie 2",
      poster_path: "/poster2.jpg",
      release_date: "2022-02-01",
      media_type: "movie",
    },
  ];

  jest
    .spyOn(require("../../services/BookmarkService"), "getBookmarks")
    .mockReturnValue(bookmarkedMovies);

  render(
    <MemoryRouter>
      <BookMark />
    </MemoryRouter>
  );

  bookmarkedMovies.forEach((movie) => {
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });
});
