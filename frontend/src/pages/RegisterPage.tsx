import { Container, Button } from "react-bootstrap";

export default function RegisterPage() {
  return (
    <Container className="container-margin">
      <div id="register-id">
        <h1>Register</h1>
        <form id="register-id" action="">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
