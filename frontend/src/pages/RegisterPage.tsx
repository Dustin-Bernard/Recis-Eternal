import { useState, FormEvent } from "react";
import { Container, Button } from "react-bootstrap";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev: FormEvent) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/registerf", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }

  return (
    <Container className="my-5" onSubmit={register}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
