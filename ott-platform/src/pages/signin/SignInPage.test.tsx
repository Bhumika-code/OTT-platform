import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import SignInPage from "./SignInPage";

jest.mock("../../services/AuthService", () => ({
  signIn: jest.fn(() => Promise.resolve(true)),
}));

describe("SignInPage component", () => {
  test("renders without errors", () => {
    render(<SignInPage />, { wrapper: MemoryRouter });
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("displays error messages with invalid credentials", async () => {
    render(<SignInPage />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByText("Sign In"));
    expect(await screen.findByText("Email is required.")).toBeInTheDocument();
    expect(
      await screen.findByText("Password is required.")
    ).toBeInTheDocument();
    expect(require("../../services/AuthService").signIn).not.toHaveBeenCalled();
  });

  test("handles sign-up button click", async () => {
    render(<SignInPage />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByText("Sign Up"));
    expect(
      await screen.findByText("Create an account here")
    ).toBeInTheDocument();
  });
});
