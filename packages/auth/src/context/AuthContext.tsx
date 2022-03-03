import React from 'react';
import { useCookies } from 'react-cookie';

type AuthState = 'checking' | 'authenticated' | 'not-authenticated';

export interface AuthContextProps {
  authState?: AuthState;
  logout: () => void;
  setAuthState(value: AuthState): void;
  setToken(value: string): void;
  token: string | undefined;
}

const { error } = console;

export const AuthContext = React.createContext({} as AuthContextProps);

const AuthContextProvider: React.FC = ({ children }) => {
  const [cookies, , removeCookie] = useCookies(['auth']);
  const [token, setToken] = React.useState<string>();
  const [authState, setAuthState] = React.useState<AuthState>();

  const checkToken = React.useCallback(async () => {
    if (token) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      const { auth } = cookies;
      const accessToken = localStorage.getItem('access_token');

      if (accessToken === null && auth) {
        setToken(auth);
        resolve();
      }

      if (accessToken) {
        setToken(accessToken);
        resolve();
      }

      reject(new Error('No token found neither on localStorage or cookies'));
    });
  }, [token]);

  const handleCheck = React.useCallback(async () => {
    try {
      await checkToken();
      setAuthState('authenticated');
    } catch (err) {
      setAuthState('not-authenticated');
    }
  }, [authState, checkToken]);

  const logout = () => {
    removeCookie('auth', { path: '/' });
    localStorage.removeItem('access_token');
    setAuthState('not-authenticated');
    setToken(undefined);
  };

  React.useEffect(() => {
    handleCheck();
  }, [handleCheck]);

  const contextValue = React.useMemo(
    () => ({
      authState,
      logout,
      setAuthState,
      setToken,
      token,
    }),
    [authState, logout, setAuthState, setToken, token],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { logout, setAuthState, setToken, token, authState } =
    React.useContext(AuthContext);

  return { authState, logout, setAuthState, setToken, token };
};

export default AuthContextProvider;
