import React from "react";
import { Outlet } from "react-router";
import UserNavbar from "../components/UserNavbar";

const UserLayout = () => {
  return (
    <main>
      <UserNavbar />

      <Outlet />
    </main>
  );
};

export default UserLayout;
