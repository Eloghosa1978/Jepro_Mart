import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "../layouts/UserLayout.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useGetUserData } from "../hooks/useGetUserData.js";
import LoadingFallback from "../components/LoadingFallback.jsx";

const Dashboard = lazy(() => import("../pages/user/Dashboard.jsx"));
const Cart = lazy(() => import("../pages/user/Cart.jsx"));
const Shop = lazy(() => import("../pages/user/Shop.jsx"));
const User404 = lazy(() => import("../pages/user/User404.jsx"));

const PrivateRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const { getUserData, isUserDataFetched } = useGetUserData() || {};

  console.log("Type of getUserData: ", typeof getUserData);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        if (user.uid) {
          getUserData(user.uid);
        }
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsuscribe();
  }, [getUserData, isUserDataFetched]);

  if (isAuthenticated === null) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  return isAuthenticated ? (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="*" element={<User404 />} />
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<LoadingFallback />}>
      <Navigate to="/login" replace />
    </Suspense>
  );
};

export default PrivateRouter;
