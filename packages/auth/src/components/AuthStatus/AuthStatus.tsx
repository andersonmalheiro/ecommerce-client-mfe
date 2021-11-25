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
    setSigned(!!cookies.auth);
  }, [cookies.auth]);

  return (
    <>
      {signed ? (
        <AuthButton>
          <AuthenticatedIcon />
        </AuthButton>
      ) : (
        <AuthButton onClick={handleAction}>
          <UnauthenticatedIcon />
        </AuthButton>
      )}
    </>
  );
};

export default AuthStatus;
