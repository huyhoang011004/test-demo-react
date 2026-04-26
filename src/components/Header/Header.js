import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Hỏi Dân IT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/users">User</Nav.Link>
                        <Nav.Link as={Link} to="/admins">Admin</Nav.Link>
                    </Nav>
                    <Nav><NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/login">Log in</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/logout">Log out</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                    </NavDropdown></Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;