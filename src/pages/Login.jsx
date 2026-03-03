import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Side (Branding) */}
      <div style={styles.left}>
        <h1 style={styles.logo}>ZomZip</h1>
        <p style={styles.tagline}>
          Fast delivery. Fresh food. Delivered to your door.
        </p>
      </div>

      {/* Right Side (Login Card) */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back</h2>

          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>

          <p style={styles.footerText}>
            Demo: admin@gmail.com / 1234
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  left: {
    flex: 1,
    background: "#ff4d4d",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  logo: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  tagline: {
    fontSize: "18px",
    maxWidth: "300px",
    textAlign: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9f9f9",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  footerText: {
    marginTop: "15px",
    fontSize: "12px",
    textAlign: "center",
    color: "#777",
  },
};

export default Login;