import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarDos = () => {
  return (
    <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-5">
            <Link  style={{textDecoration:"none", color:"black"}} to={'/home'} >
            <li>Home</li>
            </Link>
            <Link style={{textDecoration:"none", color:"black"}} to={'/create'}>
            <li>Create</li>
            </Link>
            <Link  style={{textDecoration:"none", color:"black"}} to={'/table'}>
            <li >Table</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarDos
