import React from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.registerCard}>
        <h1 className={styles.registerTitle}>Register</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            User name
          </label>
          <input
            className={styles.input}
            type="name"
            name="name"
            id="name"
            placeholder="John Doe"
            autoComplete="off"
          />
        </div>

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
          <Link to="/" className={styles.buttonSecondary}>
            Log in
          </Link>
          <button className={styles.buttonPrimary}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
