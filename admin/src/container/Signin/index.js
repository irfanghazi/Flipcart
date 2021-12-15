import React ,{useState}from "react";
import {useDispatch,useSelector} from "react-redux"
import Layout from "../../components/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { offset } from "dom-helpers";
import Input from "../../components/UI/Input";

const Signin = () => {
   
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  return (
    <div>
      <Layout />
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input 
              label="Email" 
              placeholder="Enter email" 
              type="text" 
              value = {email}
              onChange = {(e)=>setEmail(e.target.value)}
              />

              <Input 
              label="Password" 
              placeholder="Enter password" 
              type="password"
              value = {password}
              onChange = {(e)=>setPassword(e.target.value)}
              />

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
