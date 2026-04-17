import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayouts from "../layouts/PublicLayouts.jsx";
import LoadingFallback from "../components/LoadingFallback.jsx";

const Home = lazy(() => import("../pages/public/Home.jsx"));
const Login = lazy(() => import("../pages/public/Login.jsx"));
const Register = lazy(() => import("../pages/public/Register.jsx"));
const Products = lazy(() => import("../pages/public/Products.jsx"));
const Public404 = lazy(() => import("../pages/public/Public404.jsx"));

const PublicRouter = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<PublicLayouts />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Public404 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
};

export default PublicRouter;
