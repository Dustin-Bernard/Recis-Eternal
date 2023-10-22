import { useState, FormEvent, useEffect} from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  



  async function login(ev: FormEvent) {
    ev.preventDefault();
    const response = await fetch("https://reciseternal-backend.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      setRedirect(true);
      alert('login berhasil');
    }
    
    
  }
  useEffect(() => {
    // Redirect ke halaman admin jika login berhasil
    if (redirect) {
      navigate('/admin');
    }
  }, [redirect, navigate]);

    
    
  return (
    <Container className="my-5 form-container padding-top">
      <Form id="admin-form-parent" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <Form.Text className="text-muted">
            Username for eternal admin.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Label>Don't have account yet? Register now!</Form.Label>
        <Button variant="success" onClick={() => navigate("/Register")}>
          Register
        </Button>
      </Form>
    </Container>
  );
}
