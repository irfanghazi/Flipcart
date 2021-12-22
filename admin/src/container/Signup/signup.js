import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { isUserLoggedIn } from "../../redux/actions";
import { Redirect } from "react-router";
import { signupAction } from "../../redux/actions";


const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] =useState('')
  const [ email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()
  const authState = useSelector(state => state.userLoginReducer)
  const {authenticate} = authState

  useEffect(() => {
    if(!authenticate){
      dispatch(isUserLoggedIn())
    }
 }, [])

  // Redirecting Signup user to Home page after authentication
  if (authenticate) {
    return <Redirect to={"/"} />;
  }

const userSignUp = (e)=>{
  e.preventDefault()
  const user = {
    firstName,lastName,email,password
  }
  console.log("user", user)
  dispatch(signupAction(user))
}

// const signupHandler = (e)=>{
//   e.preventDefault()
//   const user = {firstName,lastName,email,password}

// }

  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit = {userSignUp}>
              <Row>

                <Col md = {6}>
                <Form.Group
                className="mb-3"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Firstname"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
                </Col>

                <Col md = {6}>
                <Form.Group
                className="mb-3"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Lastname"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
                </Col>

              </Row>
              

              <Form.Group
                className="mb-3"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </ Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
