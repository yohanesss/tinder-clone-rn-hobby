import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "@env";

const AuthContext = createContext({});
// certificate fingerprint:  46:8B:BA:D4:6A:0B:3F:F1:F3:98:72:41:45:15:C3:CD:CD:9A:90:AD

const initialState = {
  user: null,
};

const config = {
  iosClientId: IOS_CLIENT_ID,
  androidClientId: ANDROID_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
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
