import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import RemoteComponentWrapper from "../RemoteComponentWrapper";

const Login = React.lazy(() => import("auth/Login"));
const Header = React.lazy(() => import("shared_components/Header"));
const Footer = React.lazy(() => import("shared_components/Footer"));

const LoginWrapper = () => {
  document.title = "MF - Authentication";

  const navigate = useNavigate();
  const [_, setCookie, removeCookie] = useCookies(["auth"]);
  const [token, setToken] = React.useState<string | null>(null);

  const loginSuccessCallback = (response: {
    data: { access_token: string };
  }) => {
    setToken(response.data.access_token);
  };

  const loginErrorCallback = (error: unknown) => {
    console.error("error :>> ", error);
  };

  React.useEffect(() => {
    if (token) {
      setCookie("auth", `Bearer ${token}`, { path: "/" });

      navigate("/", {
        state: {
          token,
        },
      });
    } else {
      removeCookie("auth");
    }
  }, [token]);

  return (
    <>
      <RemoteComponentWrapper message="header not available">
        <Header title="MF App" />
      </RemoteComponentWrapper>

      <RemoteComponentWrapper message="auth service not available">
        <Login
          style={{
            height: "calc(100vh - 100px)",
          }}
          errorCB={loginErrorCallback}
          successCB={loginSuccessCallback}
          registerLink="/auth/register"
        />
      </RemoteComponentWrapper>

      <RemoteComponentWrapper message="footer not available">
        <Footer />
      </RemoteComponentWrapper>
    </>
  );
};

export default LoginWrapper;
