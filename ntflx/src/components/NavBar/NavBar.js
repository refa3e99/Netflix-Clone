import { Nav , Navbar, Container } from "react-bootstrap";
function NavBar(props) {
    return (   
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix Clone</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Favourite Movies</Nav.Link>
      <Nav.Link href="#pricing">Movies</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>)
}
export default NavBar;