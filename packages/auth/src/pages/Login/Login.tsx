import { AxiosError } from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { login } from '../../services/auth.service';
import styles from './Login.module.css';

interface LoginProps {
  registerLink: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const navigate = useNavigate();
  const { registerLink, ...rest } = props;
  const [, setCookie] = useCookies(['auth']);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await login({ email, password });

      if (res) {
        toast.success('Logged successfully', {
          autoClose: 3000,
          pauseOnHover: false,
          position: 'top-right',
        });

        const { access_token: accessToken } = res;
        setCookie('auth', `${accessToken}`, { path: '/' });
        localStorage.setItem('access_token', accessToken);
        navigate('/profile');
      }
    } catch (error) {
      console.error(error);
      toast.error(
        `Ops... ${
          (error as AxiosError)?.response?.data?.msg || 'something went wrong'
        }`,
        {
          autoClose: 3000,
          pauseOnHover: false,
          position: 'top-right',
        },
      );
    }
  };

  return (
    <div className={styles.container} {...rest}>
      <form className={styles.loginCard} onSubmit={handleSubmit}>
        <h1 className={styles.loginTitle}>Login</h1>

        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          autoComplete="off"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className={styles.buttonsRow}>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </div>

        <p className={styles.register}>
          <span>New user?</span>
          <Link to={registerLink}>Register now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
