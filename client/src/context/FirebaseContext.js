import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const firebaseVal = useFirebase();

  return (
    <FirebaseContext.Provider value={firebaseVal}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
