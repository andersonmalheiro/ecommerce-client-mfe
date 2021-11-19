import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { register } from "../../services/auth.service";

import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await register({ name, email, password });

      toast.success("Registered successfully", {
        autoClose: 3000,
        onClose: () => navigate("/"),
        pauseOnHover: false,
        position: "top-right",
      });
    } catch (error) {
      toast.error(
        `Ops... ${
          (error as any)?.response?.data?.msg ||
          (error as any)?.message ||
          "something went wrong"
        }`,
        {
          autoClose: 3000,
          pauseOnHover: false,
          position: "top-right",
        }
      );
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.registerCard} onSubmit={handleSubmit}>
        <h1 className={styles.registerTitle}>Register</h1>

        <Input
          label="User name *"
          type="name"
          name="name"
          id="name"
          placeholder="John Doe"
          autoComplete="off"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          label="Email *"
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
          label="Password *"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className={styles.buttonsRow}>
          <Button variant="secondary" isLink link="/">
            Log in
          </Button>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
