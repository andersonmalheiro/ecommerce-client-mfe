import { AxiosError } from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { register } from '../../services/auth.service';
import styles from './Register.module.css';

interface RegisterProps {
  loginLink: string;
}

const Register = (props: RegisterProps) => {
  const { loginLink } = props;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await register({ name, email, password });

      toast.success('Registered successfully', {
        autoClose: 3000,
        onClose: () => navigate('/'),
        pauseOnHover: false,
        position: 'top-right',
      });
    } catch (error) {
      toast.error(
        `Ops... ${
          (error as AxiosError)?.response?.data?.msg ||
          (error as AxiosError)?.message ||
          'something went wrong'
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
    <div className={styles.container}>
      <form className={styles.registerCard} onSubmit={handleSubmit}>
        <h1 className={styles.registerTitle}>Create account</h1>

        <Input
          label="User name"
          type="name"
          name="name"
          id="name"
          placeholder="John Doe"
          autoComplete="off"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
            Submit
          </Button>
        </div>

        <p className={styles.signin}>
          Already have an account? <Link to={loginLink}>Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
