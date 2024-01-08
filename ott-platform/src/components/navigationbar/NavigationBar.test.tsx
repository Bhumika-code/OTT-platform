import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "../navigationbar/NavigationBar";

describe("NavigationBar Component", () => {
  test("renders navigation bar with menu items", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    expect(screen.getByAltText("movieimage")).toBeInTheDocument();
    expect(screen.getByAltText("dashboard")).toBeInTheDocument();
    expect(screen.getByAltText("movie")).toBeInTheDocument();
    expect(screen.getByAltText("tvseries")).toBeInTheDocument();
    expect(screen.getByAltText("bookmark")).toBeInTheDocument();
    expect(screen.getByAltText("user-logo")).toBeInTheDocument();
  });

  test("navigates to the correct path on menu item click", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    fireEvent.click(screen.getByAltText("dashboard"));
    expect(window.location.pathname).toBe("/home/dashboard");

    fireEvent.click(screen.getByAltText("movie"));
    expect(window.location.pathname).toBe("/home/movie");

    fireEvent.click(screen.getByAltText("tvseries"));
    expect(window.location.pathname).toBe("/home/tvseries");

    fireEvent.click(screen.getByAltText("bookmark"));
    expect(window.location.pathname).toBe("/home/bookmark");
  });

  test('displays options on user icon click and logs out on "Logout" button click', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    fireEvent.click(screen.getByAltText("user-logo"));

    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Logout"));
  });

  test('hides options on "Cancel" button click', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    fireEvent.click(screen.getByAltText("user-logo"));
    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
    expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
  });
});
