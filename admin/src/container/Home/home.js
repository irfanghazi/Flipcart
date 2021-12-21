import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import {Row, Col, Container} from "react-bootstrap"
import { isUserLoggedIn } from '../../redux/actions'
import { Redirect } from 'react-router'
import './style.css'

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
           <Container fluid>
               <Row>
                   <Col md = {2} className = 'sidebar'>Sidebar</Col>
                   <Col md = {10} style = {{marginLeft:'auto'}}>container</Col>
               </Row>
           </Container>
          
        </>
    )
}

export default Home
