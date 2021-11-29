import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};

export default useFirebaseContext;
