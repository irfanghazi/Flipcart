import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import {Row, Col, Container} from "react-bootstrap"
import { isUserLoggedIn } from '../../redux/actions'
import { Redirect } from 'react-router'
import './style.css'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {

    const dispatch = useDispatch();
    const authState = useSelector(state => state.userLoginReducer)
    const {authenticate} = authState

   useEffect(() => {
     if(!authenticate){
       dispatch(isUserLoggedIn())
     }
  }, [])

//    // Redirecting Login user to Home page after authentication
//    if (authenticate) {
//     return <Redirect to={"/"} />;
//   }
    return (
        
        <>
           <Layout />
           <Sidebar/>
           {/* <Container fluid>
               <Row>
                   <Col md = {2} className = 'sidebar'>
                       <ul>
                           <li><NavLink to = '/'>Home</NavLink></li>
                           <li><NavLink to = '/product'>Products</NavLink></li>
                           <li><NavLink to = '/order'>Orders</NavLink></li>
                        </ul>
                   </Col>

                   <Col md = {10} style = {{marginLeft:'auto'}}>container</Col>
             </Row>
           </Container> */}
          
        </>
    )
}

export default Home
