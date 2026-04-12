import React, {useState, useMemo} from "react";
import LoginLayout from "../../layouts/LoginLayout";
import "../../CSS/Register.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

// Images
import RegisterImage from "../../assets/reedin-register.webp";

const Register = () => {
  const [validatePassword, setValidatePassword] = useState("");
  const [password, setPassword] = useState("");
  useMemo(() => {
    // Check if password consist of at least 8 charcacters and is strong
    const isValid = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    setValidatePassword(isValid ? "strong" : "weak");
  }, [password]);
  return (
    <div>
      <LoginLayout
        welcomeNote={
          <div className="welcome-note">
            <h2>Create Account</h2>
            <p>Join our community today!</p>
          </div>
        }
        form={
          <form className="register-form" aria-label="Enter details to register" tabIndex={0}>
            <div className="input-container">
              <div cal>
                <Input
                  name="name"
                  type="text"
                  placeholder="First Name"
                  className="input"
                />
                <Input
                  name="name"
                  type="text"
                  placeholder="Last Name"
                  className="input"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input"
              />
              <div>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input"
                />
                <small>Passwords must be a minimum of 8 characters</small>
              </div>
            </div>
            <div className="actions">
              <Button
                className="register-button"

              >
                Register
              </Button>
              <p className="login-link">
                Already have an account? <a href="/login">Log in here</a>
              </p>
            </div>
          </form>
        }
        image={RegisterImage}
        brandNote={" Discover the latest trends and timeless styles at Reedin Fashion. Join us today and elevate your wardrobe with our exclusive collections."}
      />
    </div>
  );
};

export default Register;
