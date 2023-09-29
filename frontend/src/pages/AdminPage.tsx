import { Form, Button, Container } from "react-bootstrap";

export default function AdminPage() {
  return (
    <Container className="container-margin form-container">
      <Form id="admin-form-parent">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>News Title</Form.Label>
          <Form.Control type="text" placeholder="Enter News Title" />
          <Form.Text className="text-muted">
            ex : RECIS A MENANG TELAK ATAS BUDI MULIA DALAM ETERNAL CUP!!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>News Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>News Picture</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>
        <Button variant="success" type="submit">
          Post
        </Button>
      </Form>
    </Container>
  );
}
