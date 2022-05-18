import { Nav , Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar(props) {
    return (   
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix Clone</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favlist">Favourite Movies</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>)
}
export default NavBar;