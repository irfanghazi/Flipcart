import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { login } from "../../redux/actions/auth.action";
import { Redirect } from "react-router";
import {isUserLoggedIn} from "../../redux/actions/auth.action"

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const authState = useSelector((state) => state.userLoginReducer);
  const { authenticate } = authState;


  const dispatch = useDispatch();
   useEffect(() => {
     if(!authenticate){
       dispatch(isUserLoggedIn())
     }
  }, [])

   // Redirecting Login user to Home page after authentication
   if (authenticate) {
    return <Redirect to={"/"} />;
  }

  
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(login(user));
  };
 

 

  return (
    <div>
      <Layout />
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
