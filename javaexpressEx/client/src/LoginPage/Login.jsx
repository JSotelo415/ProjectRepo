import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("jwtToken", token); // Store token securely
      alert("Login successful!");
    } catch (error) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <h1>Login</h1>
        <div className={styles.inputs}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
