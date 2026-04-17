import React, { useCallback, useState } from "react";

import { useNavigate, Link } from "react-router";
import "../../theme/CSS/Login.css";
import LoginLayout from "../../layouts/LoginLayout.jsx";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import { useAuth } from "../../hooks/useAuth.js";
// Images Used in the Login Page
import LoginImage from "../../assets/login-image.webp";
import googleImage from "../../../public/google-reedin.webp";
import ErrorModal from "../../components/modals/ErrorModal.jsx";

const Login = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { login, googleSignIn } = useAuth();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await login(formData.email, formData.password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsOpen(true);
        console.error("Login error: ", error.message);
      }
    },
    [formData, login],
  );

  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false);
  navigate;
  return (
    <>
      {isOpen && (
        <ErrorModal message={errorMessage} onClose={() => setIsOpen(false)} />
      )}
      <LoginLayout
        welcomeNote={
          <div className="welcome-note">
            <h2>Welcome Back,</h2>
            <p>Enter the appropriate details to log in to your account</p>
          </div>
        }
        image={LoginImage}
        form={
          <section className="login-section">
            <form className="login-form" onSubmit={handleSubmit}>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input"
                onChange={handleChange}
              />
              <Input
                name="password"
                type={visible ? "text" : "password"}
                placeholder="Password"
                className="input"
                onChange={handleChange}
              />

              {/* Actions remember and forgot password */}
              <div className="actions">
                <label className="remember" htmlFor="remember">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    aria-label="Remember me"
                  />
                  Remember me
                </label>
                <a
                  href="/forgot-password"
                  className="forgot-password"
                  aria-label="Forgot Password click here"
                  aria-describedby="forgot-password"
                >
                  Forgot Password?
                </a>
              </div>
              <Button
                className="login-button"
                label="Click to Log in"
                description="log in button"
              >
                Log in
              </Button>
            </form>

            <div className="or-container">
              <span></span> <p className="or">OR</p>
              <span></span>
            </div>

            <Button
              className="google"
              label="Click to Sign up with Google"
              description="Sign up with Google button"
              onClick={() => googleSignIn()}
            >
              <img src={googleImage} alt="Google" />
              Sign Up with Google
            </Button>

            <div className="signup-link-container">
              <p className="signup-link">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  aria-label="Click here to sign up for an account"
                  aria-describedby="signup-link"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </section>
        }
        brandNote={
          "Discover the latest trends in fashion and elevate your style with us."
        }
      />
    </>
  );
};

export default Login;
