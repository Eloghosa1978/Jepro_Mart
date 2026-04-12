import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home.jsx";
import Login from "../pages/public/Login.jsx";
import Register from "../pages/public/Register.jsx";
import Products from "../pages/public/Products.jsx";
import Public404 from "../pages/public/Public404.jsx";
import PublicLayouts from "../layouts/PublicLayouts.jsx";

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Public404 />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRouter;
