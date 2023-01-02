import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import vegan from '../images/vegan.png';

export default function Header() {
    
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        alt="off road fun finder logo"
                        src={vegan}
                        style={{
                            maxWidth: "84px",
                            height: "64px",
                            padding: "8px",
                            marginRight: "8px",
                        }}
                    />
                    VeganBook
                </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse 
                    id="navbarScroll"
                    
                >
                    <Nav
                        className="me-auto mx-5 my-2 my-lg-0 "
                        style={{ 
                            maxHeight: '100px',
                        }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Explore</Nav.Link>
                        <Nav.Link href="#action2">My Network</Nav.Link>
                        <Nav.Link href="#action2">Notifications</Nav.Link>
                        <NavDropdown title="Messaging" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Comming soon!!
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Account" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Comming soon!!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// export default HeaderContent;