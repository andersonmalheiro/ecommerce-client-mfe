import React from "react";
import RemoteComponentWrapper from "../RemoteComponentWrapper";

const Register = React.lazy(() => import("auth/Register"));

const RegisterWrapper = () => {
  document.title = "MF - Register";

  return (
    <RemoteComponentWrapper message="auth service not available">
      <Register loginLink="/auth/login" />
    </RemoteComponentWrapper>
  );
};

export default RegisterWrapper;
