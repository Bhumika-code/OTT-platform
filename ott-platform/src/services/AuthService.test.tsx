import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { signIn, registerUser } from "./AuthService";

jest.mock("node-fetch");

describe("AuthService", () => {
  describe("signIn", () => {
    it("should return false on failed sign-in", async () => {
      const mockUser = {
        email: "test@example.com",
        password: "invalid-password",
      };

      const result = await signIn(mockUser);

      expect(result).toBe(false);
    }, 10000);
  });

  describe("registerUser", () => {
    it("should return false on failed registration", async () => {
      const mockUser = {
        username: "testuser",
        email: "test@example.com",
        password: "invalid-password",
      };

      const result = await registerUser(mockUser);

      expect(result).toBe(false);
    }, 10000);
  });
  it("should handle network error during registration", async () => {
    const mockUser = {
      username: "testuser",
      email: "test@example.com",
      password: "valid-password",
    };

    global.fetch = jest.fn(() => Promise.reject("Network error"));

    const result = await registerUser(mockUser);

    expect(result).toBe(false);

    (global.fetch as jest.Mock).mockRestore();
  }, 10000);
  it("should handle network error during sign-in", async () => {
    const mockUser = {
      email: "test@example.com",
      password: "valid-password",
    };

    global.fetch = jest.fn(() => Promise.reject("Network error"));

    const result = await signIn(mockUser);

    expect(result).toBe(false);

    (global.fetch as jest.Mock).mockRestore();
  }, 10000);
  it("should return false on failed sign-in", async () => {
    const mockUser = {
      email: "test@example.com",
      password: "invalid-password",
    };

    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const result = await signIn(mockUser);

    expect(result).toBe(false);

    (global.fetch as jest.Mock).mockRestore();
  }, 10000);
  it("should return true on successful sign-in", async () => {
    const mockUser = {
      email: "test@example.com",
      password: "valid-password",
    };

    (global.fetch as jest.Mock) = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve("mock-jwt-token"),
      })
    );

    const result = await signIn(mockUser);

    expect(result).toBe(true);

    (global.fetch as jest.Mock).mockRestore();
  }, 10000);
  it("handles registration successfully", async () => {
    const userData = {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    };

    (global as any).fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    let success = false;
    await act(async () => {
      success = await registerUser(userData);
    });

    expect(success).toBe(true);
  });

  it("handles registration failure", async () => {
    const userData = {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    };

    (global as any).fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => ({}),
    });

    let success = true;
    await act(async () => {
      success = await registerUser(userData);
    });

    expect(success).toBe(false);
  });
});
