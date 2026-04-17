import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout as logoutAction } from "../store/index.js";
import "firebase/compat/auth";

import {
  registerUser,
  loginUser,
  signInWithGoogle,
  logoutUser,
} from "../services/authService.js";

// eslint-disable-next-line no-unused-vars
import { auth } from "../firebase/firebase.js";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);

  // // Listen to auth state It is already in private router.jsx
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
  //     try {
  //       if (currentUser) {
  //         console.log("Current User: ", currentUser);
  //         dispatch(setUser(currentUser));
  //       } else {
  //         dispatch(setUser(null));
  //       }
  //     } finally {
  //       dispatch(setLoading(false));
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [dispatch]);

  // Wrap functions in service for better implementation

  const register = async (name, email, password) => {
    try {
      await registerUser(name, email, password).then((user) => {
        dispatch(setUser(user));
        navigate("/user/");
        return user;
      });
    } catch (error) {
      console.error(`Error in useAuth register: `, error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      await loginUser(email, password).then((user) => {
        dispatch(setUser(user));
        navigate("/user/");
        return user;
      });
    } catch (error) {
      console.error(`Error in useAuth login: `, error.message);
      throw error;
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithGoogle().then((user) => {
        dispatch(setUser(user));
        navigate("/user/");
        return user;
      });
    } catch (error) {
      console.error(`Error in useAuth googleSignIn: `, error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser().then(() => {
        dispatch(logoutAction());
        navigate("/login");
        return null;
      });
    } catch (error) {
      console.error(`Error in useAuth logout: `, error.message);
      throw error;
    }
  };

  return {
    user,
    loading,
    register,
    login,
    googleSignIn,
    logout,
  };
};
