import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const PublicLayouts = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayouts;
