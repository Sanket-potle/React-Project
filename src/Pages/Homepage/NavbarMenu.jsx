import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useLocation } from "react-router-dom";

function NavbarMenu() {
  const location = useLocation()
  const isBlog =
    location.pathname === "/blog" ||
    location.pathname === "/blog2";

  return (
    <Navbar expand="lg" sticky="top" className="site-navbar">
      <Container className="navbar-container">
        <Navbar.Brand as={NavLink} to="/" className="site-brand">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Logo</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          className="site-navbar-toggle"
        />
        <Navbar.Collapse id="primary-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
            <NavDropdown
              title="Explore"
              id="blog-navigation"
              className={isBlog ? 'is-active' : ''}
            >
              <NavDropdown.Item as={NavLink} to="/blog">Latest stories</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/blog2">Featured reads
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarMenu;
