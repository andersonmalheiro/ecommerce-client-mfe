import React from "react";
import { useCookies } from "react-cookie";
import { ReactComponent as AuthenticatedIcon } from "../../assets/authenticated.svg";
import { ReactComponent as UnauthenticatedIcon } from "../../assets/unauthenticated.svg";
import { AuthButton } from "./AuthStatus.styles";

interface AuthStatusProps {
  handleAction: () => void;
}

const AuthStatus = (props: AuthStatusProps) => {
  const { handleAction } = props;

  const [cookies] = useCookies(["auth"]);
  const [signed, setSigned] = React.useState(false);

  React.useEffect(() => {
    const { auth } = cookies;
    const access_token = localStorage.getItem("access_token");

    if (
      (access_token === null && auth) ||
      (access_token && !auth) ||
      (auth && access_token)
    ) {
      setSigned(true);
    }
  }, [cookies.auth]);

  return (
    <>
      {signed ? (
        <AuthButton title="Signed in">
          <AuthenticatedIcon />
        </AuthButton>
      ) : (
        <AuthButton onClick={handleAction} title="Not signed">
          <UnauthenticatedIcon />
        </AuthButton>
      )}
    </>
  );
};

export default AuthStatus;
