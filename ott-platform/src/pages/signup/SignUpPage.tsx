import React, { useState } from "react";
import InputField from "../../components/inputfeild/InputFeild";
import Button from "../../components/button/Button";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/AuthService";

interface SignUpPageProps {
  registerButtonColor?: string;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ registerButtonColor }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!user.fullName) {
      newErrors.fullName = "Full Name is required.";
    } else if (!user.email) {
      newErrors.email = "Email is required.";
    } else if (!user.password) {
      newErrors.password = "Password is required.";
    } else if (!user.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.email && !emailRegex.test(user.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const minPasswordLength = 8;
    if (user.password && user.password.length < minPasswordLength) {
      newErrors.password = `Password must be at least ${minPasswordLength} characters long.`;
    }

    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const registrationData = {
      username: user.fullName,
      password: user.password,
      email: user.email,
    };

    const registrationSuccessful = await registerUser(registrationData);

    if (registrationSuccessful) {
      alert("Registration successful! Please sign in.");
      navigate("/signin");
      console.log("User registered successfully");
    } else {
      alert("Registration failed. Please try again.");
    }

    setErrors(newErrors);
  };

  return (
    <div className="main-container">
      <h1 className="Movie-container">Movie OTT</h1>
      <div className="input-container">
        <span className="register-color">Register</span>
        <form className="form-container">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Full Name"
            className="input-style"
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            error={errors.fullName}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Email"
            className="input-style"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            error={errors.email}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            className="input-style"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            error={errors.password}
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            className="input-style"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            error={errors.confirmPassword}
          />
          <Button
            color=""
            label="Register"
            onClick={handleRegister}
            className="register-button"
            style={{ backgroundColor: registerButtonColor }}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
export type { SignUpPageProps };
