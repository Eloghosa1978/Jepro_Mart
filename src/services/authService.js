import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/firestore";

import { auth } from "../firebase/firebase.js";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

const getErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/email-already-in-use":
      "Email already in use. Please use a different email.",
    "auth/invalid-email": "Invalid email format. Please enter a valid email.",
    "auth/operation-not-allowed":
      "Operation not allowed. Please contact support.",
    "auth/weak-password": "Weak password. Please enter a stronger password.",
    "auth/user-disabled": "User account is disabled. Please contact support.",
    "auth/user-not-found": "User not found. Please register first.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Invalid credentials. Please try again.",
  };
  return (
    errorMessages[errorCode] ||
    "An unexpected error occurred. Please try again."
  );
};

// Register
export const registerUser = async (name, email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;
        // Create a user document in Firestore
        if (user) {
          await firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .set({
              uid: user.uid,
              name: name,
              email: email,
              profilePicture: user.photoURL || null,
              createdAt: new Date(),
              role: "user",
            })
            .then(() => {
              console.log("User document created successfully");

              return user;
            });
        }
        return user;
      },
    );
  } catch (error) {
    const errorMessage = getErrorMessage(error.code);
    console.log(`Full Auth Error: `, error);
    console.error(`Error creating user: ${errorMessage}`);
    throw new Error(errorMessage);
  }
};

// Log in
export const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;
        return user;
      },
    );
  } catch (error) {
    const errorMessage = getErrorMessage(error.code);
    console.log(`Full Auth Error: `, error);

    console.error(`Error signing user: ${errorMessage}`);
    throw new Error(errorMessage);
  }
};

// Google Sign IN
export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      // Check if user document exists in Firestore
      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then(async (doc) => {
          if (!doc.exists) {
            // If not, create a new user document
            await firebase
              .firestore()
              .collection("users")
              .doc(user.uid)
              .set({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                profilePicture: user.photoURL || null,
                createdAt: new Date(),
                role: "user",
              })
              .then(() => {
                console.log("User document created successfully");
                return user;
              });
          }

          if (user) {
            return user;
          }
        });
      return user;
    });
  } catch (error) {
    const errorMessage = getErrorMessage(error.code);
    console.log(`Full Auth Error: `, error);
    console.error(`Error signing in with Google: ${errorMessage}`);
    throw new Error(errorMessage);
  }
};

// Log out
export const logoutUser = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    const errorMessage = getErrorMessage(error.code);
    console.error(`Error signing out: ${errorMessage}`);
  }
};
