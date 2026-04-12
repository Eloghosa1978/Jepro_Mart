import React from "react";
import { useNavigate } from "react-router";
import "../CSS/LoginLayout.css";

const LoginLayout = ({ welcomeNote, image, form, brandNote }) => {
  const navigate = useNavigate();
  return (
    <div className="sign-page">
      <div className="sign-container">
        <div className="content-container">
          <header className="sign-header">
            <h2 className="logo">
              ReeDin <span>Fashion</span>
            </h2>
            <button onClick={() => navigate("/")}>Back to website</button>
          </header>
          <div className="content">
            <div>
              {welcomeNote}
              {/*Left Hand side is the form */}
              {form}
            </div>
          </div>
        </div>

        {/* Right Hand Side on Desktop - Image and background image on Mobile*/}
        <div className="image-container">
          <img src={image} alt="Login Image" loading="lazy" />

          <div className="overlay">
            <div className="bottom">
              <h2>
                Welcome to <strong>Reedin Fashion</strong>
              </h2>
              {<p>{brandNote}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
