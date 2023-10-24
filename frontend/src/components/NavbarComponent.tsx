import { Navbar, Nav, Container, Image, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from "../assets/eternal_rainbow.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  const handleNavLinkClick = () => {
    if (show) {
      handleClose();
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
          {/* <Navbar.Brand
            className="nav-logo"
            href="https://reginapacis.sch.id/"
            target="_blank"
          >
            <Image
              src={RecisLogo}
              style={{ height: "60px", width: "45px" }}
              className="logo"
            />
          </Navbar.Brand> */}
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
            style={{ border: "none" }}
            aria-controls="basic-navbar-nav"
            className="navbar-toggle"
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
          </Navbar.Toggle>
          {/* <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse> */}
          <Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            onClick={handleNavLinkClick}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                {/* <Navbar.Brand
                  className="nav-logo"
                  href="https://reginapacis.sch.id/"
                  target="_blank"
                >
                  <Image
                    src={RecisLogo}
                    style={{ height: "60px", width: "45px" }}
                    className="logo"
                  />
                </Navbar.Brand> */}
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
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto text-center">
                <NavLink id="navlink" to="/">
                  Home
                </NavLink>
                <NavLink id="navlink" to="/about">
                  About
                </NavLink>
                {/* <NavLink id="navlink" to="/news">
                  News
                </NavLink> */}
                <NavLink id="navlink" to="/merch">
                  Merch
                </NavLink>
                <NavLink id="navlink" to="/schedule">
                  Schedule
                </NavLink>
                <NavLink id="navlink" to="/eternal cup">
                  Eternal Cup
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
