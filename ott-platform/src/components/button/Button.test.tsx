import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../button/Button";

describe("Button Component", () => {
  test("renders button with label", () => {
    render(<Button label="Click Me" color="blue" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button label="Click Me" color="blue" onClick={onClickMock} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("applies styles and className correctly", () => {
    render(
      <Button
        label="Styled Button"
        color="green"
        className="custom-class"
        style={{ fontSize: "18px" }}
      />
    );

    const button = screen.getByText("Styled Button");
    expect(button).toHaveStyle("background-color: green; font-size: 18px;");
    expect(button).toHaveClass("custom-class");
  });

  test("disables the button when disabled prop is true", () => {
    render(<Button label="Disabled Button" color="red" disabled={true} />);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });
});
