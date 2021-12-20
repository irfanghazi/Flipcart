import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
//import Input from "../../components/UI/Input";

const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] =useState('')
  const [ email, setEmail] = useState('')
  const [password,setPassword] = useState('')

const signupHandler = (e)=>{
  e.preventDefault()
  const user = {firstName,lastName,email,password}
  console.log(user)
}

  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <div>
              <Row>

                <Col md = {6}>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
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
                controlId="exampleForm.ControlInput1"
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
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick = {signupHandler}>
                Submit
              </Button>
            </ div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
