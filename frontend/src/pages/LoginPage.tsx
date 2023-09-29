import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container className="container-margin form-container">
      <Form id="admin-form-parent">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
          <Form.Text className="text-muted">
            Username for eternal admin.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Label>Don't have account yet? Register now!</Form.Label>
        <Button variant="success" onClick={() => navigate("/Register")}>
          Register
        </Button>
      </Form>
    </Container>
  );
}
