import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const NavBar = () => (
    <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="navbar-container"
    >
        <Navbar expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    MyPortfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="hero" smooth={true} duration={500}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="about" smooth={true} duration={500}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="skills" smooth={true} duration={500}>
                            Skills
                        </Nav.Link>
                        <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </motion.nav>
);

export default NavBar;
