import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div className="navbar-geming position-sticky top-0 w-100">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand id="navbar-brand-id" href="/" className="mx-auto">
            Eternal Recis
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/schedule">Schedule</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
