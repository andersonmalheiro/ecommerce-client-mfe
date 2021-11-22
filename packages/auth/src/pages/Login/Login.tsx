import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { login } from "../../services/auth.service";

import styles from "./Login.module.css";

interface LoginProps {
  registerLink: string;
  successCB?: (...args: any[]) => void;
  errorCB?: (error: unknown) => void;
}

export default function Login(props: LoginProps) {
  const { successCB, errorCB, registerLink } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await login({ email, password });

      toast.success("Logged successfully", {
        autoClose: 3000,
        pauseOnHover: false,
        position: "top-right",
      });

      successCB && successCB(res);
    } catch (error) {
      toast.error(
        `Ops... ${
          (error as any)?.response?.data?.msg || "something went wrong"
        }`,
        {
          autoClose: 3000,
          pauseOnHover: false,
          position: "top-right",
        }
      );

      errorCB && errorCB(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginCard} onSubmit={handleSubmit}>
        <h1 className={styles.loginTitle}>Login</h1>

        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          autoComplete="off"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className={styles.buttonsRow}>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </div>

        <p className={styles.register}>
          New user? <Link to={registerLink}>Register now</Link>
        </p>
      </form>
    </div>
  );
}
