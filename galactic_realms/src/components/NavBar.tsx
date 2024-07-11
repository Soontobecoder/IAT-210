import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>Galactic realms</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/inspiration">Inspiration</Nav.Link>
          <Nav.Link href="/rule-book">Rule book</Nav.Link>
          <Nav.Link href="/description">Description</Nav.Link>
          <Nav.Link href="/visual-gallery">Team</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
