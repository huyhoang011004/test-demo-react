import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="">
            <Container fluid className="px-4">
                <Navbar.Brand as={NavLink} to="/">Hỏi Dân IT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/users">User</Nav.Link>
                        <Nav.Link as={NavLink} to="/admins">Admin</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="light me-3">Log in</Button>
                        <Button variant="dark">Sign up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;