import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RemoteComponentWrapper from '../RemoteComponentWrapper';

const Login = React.lazy(() => import('auth_mf/Login'));
const Header = React.lazy(() => import('shared_components/Header'));
const Footer = React.lazy(() => import('shared_components/Footer'));

const LoginWrapper = () => {
  document.title = 'MF - Authentication';

  const navigate = useNavigate();
  const [cookies] = useCookies(['auth']);

  // Checking if the user is already logged in
  React.useEffect(() => {
    if (cookies.auth) {
      toast.success('Already authenticated.');
      navigate('/');
    }
  }, []);

  React.useEffect(() => {
    if (cookies.auth) {
      navigate('/');
    }
  }, [cookies.auth]);

  return (
    <>
      <RemoteComponentWrapper message="header not available">
        <Header title="MF App" />
      </RemoteComponentWrapper>

      <RemoteComponentWrapper message="auth service not available">
        <Login
          style={{
            height: 'calc(100vh - 100px)',
          }}
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
