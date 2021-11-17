import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.loginCard}>
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
          />
        </div>

        <div className={styles.buttonsRow}>
          <Link to="/register" className={styles.buttonSecondary}>
            Register
          </Link>
          <button className={styles.buttonPrimary}>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
