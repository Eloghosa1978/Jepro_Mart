import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userActions.js";
import { getUserData } from "../services/getUserData.js";

export const useGetUserData = (uid) => {
  const dispatch = useDispatch();
  const [isUserDataFetched, setIsUserDataFetched] = useState(false);
  useMemo(() => {
    if (!uid) return;

    const fetchData = async () => {
      try {
        const userData = await getUserData(uid);
        if (userData) {
          dispatch(setUser(userData));
          setIsUserDataFetched(true);
        } else {
          // User Exists in auth but not in Firestore, handle this case as needed
          console.warn(
            "User authenticated but no user data found in Firestore",
          );
          setIsUserDataFetched(false);
        }
      } catch (error) {
        console.error(`Error fetching user data: `, error.message);
      }
    };
    fetchData();
  }, [uid, dispatch]);

  return { getUserData, isUserDataFetched };
};
