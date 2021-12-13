import React from "react";
import Layout from "../../components/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { offset } from "dom-helpers";
import Input from "../../components/UI/Input";

const Signin = () => {
  return (
    <div>
      <Layout />
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input label="Email" placeholder="Enter email" type="text" />

              <Input label="Password" placeholder="Enter password" type="password" />

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
