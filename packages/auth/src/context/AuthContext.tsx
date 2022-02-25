import React from "react";
import { useCookies } from "react-cookie";

export interface AuthContextProps {
  authState?: AuthState;
  logout: () => void;
  setAuthState: (value: AuthState) => void;
  setToken: (value: string) => void;
  token: string | undefined;
}

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthState = "checking" | "authenticated" | "not-authenticated";

const AuthContextProvider: React.FC = ({ children }) => {
  const [cookies, , removeCookie] = useCookies(["auth"]);
  const [token, setToken] = React.useState<string>();
  const [authState, setAuthState] = React.useState<AuthState>();

  const checkToken = React.useCallback(async () => {
    if (token) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      const { auth } = cookies;
      const access_token = localStorage.getItem("access_token");

      if (access_token === null && auth) {
        setToken(auth);
        resolve();
      }

      if (access_token) {
        setToken(access_token);
        resolve();
      }

      reject(new Error("No token found neither on localStorage or cookies"));
    });
  }, [token]);

  const handleCheck = React.useCallback(async () => {
    try {
      await checkToken();
      setAuthState("authenticated");
    } catch (error) {
      console.error((error as { message: string }).message);
      setAuthState("not-authenticated");
    }
  }, [authState, checkToken]);

  const logout = () => {
    removeCookie("auth", { path: "/" });
    localStorage.removeItem("access_token");
    setAuthState("not-authenticated");
    setToken(undefined);
  };

  React.useEffect(() => {
    handleCheck();
  }, [handleCheck]);

  return (
    <AuthContext.Provider
      value={{
        authState,
        logout,
        setAuthState,
        setToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { logout, setAuthState, setToken, token, authState } =
    React.useContext(AuthContext);

  return { authState, logout, setAuthState, setToken, token };
};

export default AuthContextProvider;
