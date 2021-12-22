import React from 'react'
import {Row, Col, Container} from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
    return (
        <>
            <Container fluid>
               <Row>
                   <Col md = {2} className = 'sidebar'>
                       <ul>
                           <li><NavLink to = '/'>Home</NavLink></li>
                           <li><NavLink to = '/product'>Products</NavLink></li>
                           <li><NavLink to = '/category'>Categories</NavLink></li>
                           <li><NavLink to = '/order'>Orders</NavLink></li>
                        </ul>
                   </Col>
                </Row>
           </Container>
        </>
    )
}

export default Sidebar
