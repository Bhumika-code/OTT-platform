import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../homepage/HomePage";

test("renders NavigationBar and Outlet", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  const navigationBar = screen.getByTestId("navigation-bar");
  expect(navigationBar).toBeInTheDocument();
  const outlet = screen.getByTestId("outlet");
  expect(outlet).toBeInTheDocument();
});
