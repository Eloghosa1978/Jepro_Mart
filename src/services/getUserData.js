import firebase from "firebase/compat/app";

export const getUserData = async (uid) => {
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("User Data: ", doc.data());
          return doc.data();
        } else {
          console.log("No user data found");
        }
      });
  } catch (error) {
    console.error(`Error getting user data: `, error.message);
  }
};
