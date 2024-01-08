import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DashBoard from "./DashBoard";
import * as MovieTmdb from "../../services/MovieTmdb";

jest.mock("../../services/MovieTmdb");

describe("DashBoard Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders movies and tv series carousels after fetching data", async () => {
    const popularMovies = [{ id: 1, title: "Movie 1", poster_path: "/path1" }];
    const trendingMovies = [{ id: 2, title: "Movie 2", poster_path: "/path2" }];
    const popularTvseries = [
      { id: 3, name: "TV Series 1", poster_path: "/path3" },
    ];
    const trendingTvseries = [
      { id: 4, name: "TV Series 2", poster_path: "/path4" },
    ];

    (MovieTmdb.fetchPopularMovies as jest.Mock).mockResolvedValue(
      popularMovies
    );
    (MovieTmdb.fetchTrendingMovies as jest.Mock).mockResolvedValue(
      trendingMovies
    );
    (MovieTmdb.fetchpopularTvseries as jest.Mock).mockResolvedValue(
      popularTvseries
    );
    (MovieTmdb.fetchTrendingTvseries as jest.Mock).mockResolvedValue(
      trendingTvseries
    );

    render(<DashBoard />);

    await waitFor(() => {
      expect(screen.queryByTestId("loader")).toBeNull();
    });
  });

  it("handles errors while fetching data", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    (MovieTmdb.fetchPopularMovies as jest.Mock).mockRejectedValue(
      "Error fetching popular movies"
    );

    render(<DashBoard />);

    await waitFor(() => {
      expect(screen.queryByTestId("loader")).toBeNull();
    });

    consoleErrorSpy.mockRestore();
  });
});
