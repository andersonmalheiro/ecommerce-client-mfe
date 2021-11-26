import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC = ({ children }) => {
  const { authState } = useAuth();

  React.useEffect(() => {
    console.log("authState :>> ", authState);
  }, [authState]);

  if (!authState) {
    return null;
  }

  if (authState === "checking") {
    return <div>checking...</div>;
  }

  if (authState === "not-authenticated") {
    return <Navigate to="/" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default RequireAuth;
