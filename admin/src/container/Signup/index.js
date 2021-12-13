import React from "react";
import Layout from "../../components/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

const Signup = () => {
  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>

                <Col md = {6}>
                <Input label="First Name" placeholder="Enter first name" type="text" />
                </Col>

                <Col md = {6}>
                <Input label="Last Name" placeholder="Enter last name" type="text" />
                </Col>

              </Row>
              

              <Input label ="Email" placeholder="Enter email" type = "email" />
              <Input label ="Password" placeholder="Enter password" type = "password" />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
