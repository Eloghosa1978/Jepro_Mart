import React, { useState, useMemo, useCallback } from "react";
import LoginLayout from "../../layouts/LoginLayout";
import "../../theme/CSS/Register.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import ErrorModal from "../../components/modals/ErrorModal";
// Images
import RegisterImage from "../../assets/reedin-register.webp";
import Google from "../../../public/google-reedin.webp";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // Auth tools
  const { googleSignIn, register } = useAuth();

  // Form State and Validation
  const [validatePassword, setValidatePassword] = useState("");

  const [formErrors, setFormErrors] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validData, setValidData] = useState();

  useMemo(() => {
    // Check if password consist of at least 8 charcacters and is strong
    const isValid =
      formData.password.length >= 8 &&
      /[A-Z]/.test(formData.password) &&
      /[a-z]/.test(formData.password) &&
      /[0-9]/.test(formData.password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
    setValidatePassword(isValid ? "strong" : "weak");
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
    console.log(formData);
  };

  useMemo(() => {
    let errors = null;
    switch (true) {
      // cases to check if all inputs are filled with valid data

      case !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword:
        errors = "All fields are required.";
        break;
      case formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email):
        errors = "Please enter a valid email address.";
        break;
      case validatePassword === "weak":
        errors =
          "password should have mixed characters : Upper, lower, numbers, and symbols.";
        break;
      case formData.password !== formData.confirmPassword:
        errors = "Passwords must match";
        break;
      default:
        errors = null;
        break;
    }
    setFormErrors(errors);
  }, [formData, validatePassword]);

  useMemo(() => {
    if (formErrors === null) {
      setValidData({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
      });
    }
  }, [formErrors, formData]);

  const signUp = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (validData) {
          await register(validData.name, validData.email, validData.password);
        }
      } catch (err) {
        console.error(err);
        setErrorMessage(err.message);
        setIsOpen(true);
      }
    },
    [validData, register],
  );
  return (
    <div>
      {isOpen && (
        <ErrorModal message={errorMessage} onClose={() => setIsOpen(false)} />
      )}
      <LoginLayout
        welcomeNote={
          <div className="welcome-note">
            <h2>Create Account</h2>
            <p>Join our community today!</p>
          </div>
        }
        form={
          <form
            className="register-form"
            aria-label="Enter details to register"
            tabIndex={0}
            onSubmit={signUp}
          >
            <div className="input-container">
              <div className="flex-inputs">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="input"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="input"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="flex-inputs">
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={`input ${validatePassword === "weak" ? "weak-password" : ""}`}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="terms-label">
                  I agree to the <a href="/terms">Terms and Conditions</a>
                </label>
              </div>

              <div>{formErrors && <small>{formErrors}</small>}</div>
            </div>
            <div className="actions">
              <Button className="register-button" type="submit">
                Register
              </Button>
            </div>
            <div className="or-container">
              <span></span>
              <p>or</p>
              <span></span>
            </div>
            <div className="social-login">
              <Button
                className=" google"
                type="button"
                onClick={() => googleSignIn()}
              >
                <img src={Google} alt="Google" />
                Sign up with Google
              </Button>
            </div>

            <div className="login">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        }
        image={RegisterImage}
        brandNote={
          " Discover the latest trends and timeless styles at Reedin Fashion. Join us today and elevate your wardrobe with our exclusive collections."
        }
      />
    </div>
  );
};

export default Register;
