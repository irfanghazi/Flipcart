import React from "react";
import Header from "../Header";
import {Col, Row, Container} from "react-bootstrap"
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  
  return (
    <>
    <Header/>
    {
    props.sidebar ? 
    <Container fluid>
               <Row>
                   <Col md = {2} className = 'sidebar'>
                       <ul>
                            <li><NavLink to = {'/'}>Home</NavLink></li>
                            <li><NavLink to = {'/category'}>Category</NavLink></li>
                              <li><NavLink to = {'/product'}>Products</NavLink></li>
                            <li><NavLink to = {'/order'}>Orders</NavLink></li>
                        </ul>
                   </Col>

                   <Col md = {10} style = {{marginLeft:'auto'}}>{props.children}</Col>
             </Row>
    </Container>  
    : props.children
  }
    </>
  );
};

export default Layout;
