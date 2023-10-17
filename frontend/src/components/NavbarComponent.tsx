import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from "../assets/eternal_rainbow.png";
import RecisLogo from "../assets/recis_logo.png";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="navbar-geming position-fixed top-0 w-100">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand
            className="nav-logo"
            href="https://reginapacis.sch.id/"
            target="_blank"
          >
            <Image
              src={RecisLogo}
              style={{ height: "60px", width: "45px" }}
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="nav-logo" href="/">
            <Image
              src={Logo}
              style={{ height: "60px", width: "60px" }}
              className="logo"
              roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Brand
            id="navbar-brand-id"
            href="/"
            className="mx-auto text-center"
          >
            Recis Eternal
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink id="navlink" to="/">
                Home
              </NavLink>
              <NavLink id="navlink" to="/about">
                About
              </NavLink>
              <NavLink id="navlink" to="/merch">
                Merch
              </NavLink>
              <NavLink id="navlink" to="/schedule">
                Schedule
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
