import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { login } from "../../services/auth.service";

import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login({ email, password });
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
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={styles.buttonsRow}>
          <Button variant="secondary" isLink link="/register">
            Register
          </Button>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}
