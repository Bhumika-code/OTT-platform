import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  const mockOnSearch = jest.fn();

  test("updates query when input value changes", () => {
    render(
      <BrowserRouter>
        <SearchBar onSearch={mockOnSearch} />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for movies or TV series"
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "Avengers" } });

    expect(searchInput.value).toBe("Avengers");
  });

  test("calls onSearch when search button is clicked", () => {
    render(
      <BrowserRouter>
        <SearchBar onSearch={mockOnSearch} />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for movies or TV series"
    ) as HTMLInputElement;
    const searchButton = screen.getByText("search");

    fireEvent.change(searchInput, { target: { value: "Avengers" } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("Avengers");
  });
  test("renders with default placeholder and empty value", () => {
    render(
      <BrowserRouter>
        <SearchBar onSearch={mockOnSearch} />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for movies or TV series"
    ) as HTMLInputElement;

    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toBe("");
  });
  test("handles logout icon click", () => {
    render(
      <BrowserRouter>
        <SearchBar onSearch={mockOnSearch} />
      </BrowserRouter>
    );

    const logoutIcon = screen.getByAltText("user-logo");

    fireEvent.click(logoutIcon);

    const logoutPopup = screen.getByText("Logout");
    expect(logoutPopup).toBeInTheDocument();
    expect(logoutPopup).toBeVisible();
  });
});
