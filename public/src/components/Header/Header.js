import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import icon from '../../img/icon.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={icon} /> Emoji World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto" >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Categories</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;