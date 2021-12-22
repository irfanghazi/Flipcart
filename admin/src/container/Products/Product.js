import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../Sidebar/Sidebar";

const Product = (props) => {
  return (
    <>
      <Layout />
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={10}>
          <p>Hii</p>
        </Col>
      </Row>
    </>
  );
};
export default Product;
