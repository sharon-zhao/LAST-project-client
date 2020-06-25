import React, { Fragment } from 'react'
import { Nav, Navbar, Button, Dropdown, ButtonGroup } from 'react-bootstrap'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#shopping-cart">My Cart</Nav.Link>
    <Dropdown as={ButtonGroup}>
      <Button variant="success">User Action</Button>
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item href="#allapplications">My Application</Dropdown.Item>
        <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
        <Dropdown.Item href="#sign-out">Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    {/* <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link href="#allapplications">My Application</Nav.Link> */}
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="newnav" bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      GA Boston
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
