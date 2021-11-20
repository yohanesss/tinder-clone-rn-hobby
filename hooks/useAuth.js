import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});
// certificate fingerprint:  46:8B:BA:D4:6A:0B:3F:F1:F3:98:72:41:45:15:C3:CD:CD:9A:90:AD

const initialState = {
  user: null,
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.logInAsync();
  };

  return (
    <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
