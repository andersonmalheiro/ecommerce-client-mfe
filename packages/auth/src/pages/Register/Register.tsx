import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth.service";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await register({ name, email, password });
    alert("Success!");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form className={styles.registerCard} onSubmit={handleSubmit}>
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
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
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
          <Link to="/" className={styles.buttonSecondary}>
            Log in
          </Link>
          <button type="submit" className={styles.buttonPrimary}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
