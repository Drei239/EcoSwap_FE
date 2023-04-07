import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = React.createContext();

const unAuthPage = [
  "/",
  "/signin",
  "/signup",
  // "/user-info",
];

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        profileData,
        setProfileData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
