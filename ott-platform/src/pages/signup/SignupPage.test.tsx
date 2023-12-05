import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpPage from "./SignUpPage";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../services/AuthService", () => ({
  registerUser: jest.fn(() => Promise.resolve(true)),
}));

describe("SignUpPage component", () => {
  test("renders without errors", () => {
    render(<SignUpPage />, { wrapper: MemoryRouter });
    expect(screen.getByText("Movie OTT")).toBeInTheDocument();
    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  test("displays error message for password mismatch", async () => {
    render(<SignUpPage />, { wrapper: MemoryRouter });
    fireEvent.change(screen.getByText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.change(screen.getByText("Confirm Password"), {
      target: { value: "password456" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Register" }));

    await waitFor(() => {
      expect(screen.getByText("Passwords do not match.")).toBeInTheDocument();
    });
  });
});
