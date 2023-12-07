import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookMark from "./BookMark";
import { MemoryRouter } from "react-router-dom";

test("renders BookMark component", () => {
  render(
    <MemoryRouter>
      <BookMark />
    </MemoryRouter>
  );
});
