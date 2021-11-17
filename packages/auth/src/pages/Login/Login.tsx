import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/auth.service";
import styles from "./Login.module.css";

const Login = () => {
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

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            autoComplete="off"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            placeholder="******"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.buttonsRow}>
          <Link to="/register" className={styles.buttonSecondary}>
            Register
          </Link>
          <button type="submit" className={styles.buttonPrimary}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
