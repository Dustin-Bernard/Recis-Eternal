import { useState, FormEvent } from "react";
import { Container, Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";



export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function register(ev: FormEvent) {
    ev.preventDefault();
    const response = await fetch("https://reciseternal-backend.vercel.app/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration succeed, click the login button to access this admin page!");
    } else {
      alert("Registration failed");
    }
  }

  return (
    <Container className="my-5 padding-top" onSubmit={register}>
      <div id="register-id">
        <h1>Register</h1>
        <form id="register-id" action="">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
          <div>
          <Button variant="primary" onClick={() => navigate("/login")}>
            login
          </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
