import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../Sidebar/Sidebar";

const Order = () => {
  return (
    <>
      <Layout />
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        
        <Col>
          <p>Order page</p>
        </Col>
      </Row>
    </>
  );
};

export default Order;
