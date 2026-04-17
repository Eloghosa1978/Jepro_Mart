import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = firebase.firestore();

const getErrorMessage = (errorCode) => {
  const errorMessages = {
    unavailable: "Service is currently unavailable. Please try again later.",
    "network-request-failed":
      "Network error. Please check your connection and try again.",
    "deadline-exceeded":
      "The request took too long to complete. Please try again.",
    internal: "An internal error occurred. Please try again later.",
    "permission-denied": "You do not have permission to perform this action.",
    unauthenticated: "Please log in to perform this action.",
  };
  return (
    errorMessages[errorCode] ||
    "An unexpected error occurred. Please try again."
  );
};

export const getProducts = async () => {
  try {
    const snapshot = await db.collection("products").get();

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    const errorMessage = getErrorMessage(error.code);
    console.error("Error Fetching Products: ", error);
    throw new Error(errorMessage);
  }
};
