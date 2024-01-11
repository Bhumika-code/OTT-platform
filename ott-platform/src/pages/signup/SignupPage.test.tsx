import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpPage from "../signup/SignUpPage";
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

  test("updates state on input field changes", () => {
    render(<SignUpPage />, { wrapper: MemoryRouter });

    fireEvent.change(screen.getByPlaceholderText("Full Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
      target: { value: "password123" },
    });

    expect(screen.getByPlaceholderText("Full Name")).toHaveValue("John Doe");
    expect(screen.getByPlaceholderText("Email")).toHaveValue(
      "john@example.com"
    );
    expect(screen.getByPlaceholderText("Password")).toHaveValue("password123");
    expect(screen.getByPlaceholderText("Confirm Password")).toHaveValue(
      "password123"
    );
  });

  test("displays errors for missing fields on register click", async () => {
    render(<SignUpPage />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByRole("button", { name: "Register" }));

    await waitFor(() => {
      expect(screen.getByText("Full Name is required.")).toBeInTheDocument();
    });
  });

  test("displays error for invalid email on register click", async () => {
    render(<SignUpPage />, { wrapper: MemoryRouter });

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "invalid-email" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Register" }));

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address.")
      ).toBeInTheDocument();
    });
  });
});
