import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Home Page</h2>

      <button onClick={() => navigate("/login")}>Go to Login page</button>
    </div>
  );
};

export default Home;
