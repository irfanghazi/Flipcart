import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions";
import { Redirect } from "react-router";


const Header = () => {

const dispatch = useDispatch()
const authState = useSelector(state => state.userLoginReducer)
const {authenticate} = authState

const logout = ()=>{
  dispatch(logoutUser())
  }

  const renderNonLoggedInLinks = () => {
    return ( <Nav>
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link"> Signin</NavLink>
      </li>
      <li className="nav-item">
         <NavLink to="/signup" className="nav-link"> Signup </NavLink>
      </li>
    </Nav>)
   
  };

  const renderLoggedInLinks = () => {
    return(
      <Nav>
       <li className="nav-item">
         <span className="nav-link" onClick = {logout} style = {{cursor:'pointer'}}> Signout </span>
       
       </li>
    </Nav>
    )
   };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: 1 }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
           {authenticate ? renderLoggedInLinks() :renderNonLoggedInLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
