import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputField from "./InputFeild";

describe("InputField Component", () => {
  test("renders input field with label and placeholder", () => {
    render(
      <InputField
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
    );

    expect(
      screen.getByPlaceholderText("Enter your username")
    ).toBeInTheDocument();
  });

  test("renders with provided value", () => {
    render(
      <InputField
        label="City"
        type="text"
        placeholder="Enter your city"
        value="New York"
        onChange={() => {}}
      />
    );

    expect(screen.getByDisplayValue("New York")).toBeInTheDocument();
  });
});
