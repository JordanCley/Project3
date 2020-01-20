import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Appetizers from "../components/Appetizers/Appetizers";
// import API from "../../src/utils/API";
import "./Stylesheets/MyOrders.css";

function MyOrders(props) {
  //line 10-23 doesnt work so disregard these lines
  //   const [order, setOrder] = useState([]);
  //Use state for now as reference
  //Populate currentOrder as initial state
  //update currentOrder everytime order is placed
  //   console.log(currentOrder);
  //   useEffect(() => {
  //     loadOrder();
  //   }, []);

  //   function loadOrder() {
  //     API.getProducts()
  //       .then(res => setOrder(res.data[0].description))
  //       .catch(err => console.log(err));
  //   }

  return (
    <Container fluid>
      <Row>
        <h1>My Orders</h1>
        {/* Line 35 is where the order itself gets populated */}
      </Row>
      <p>aa</p>
      <Row className="text-center mt-4 mb-4">
        <Col lg={12}>
          <p>This is the View My Orders Page.</p>
          <Button variant="outline-danger mr-2" size="lg" href="/menu">
            Back To Menu
          </Button>
          {/* This button doesnt work yet  */}
          <Button variant="outline-success ml-2" size="lg" href="/view-check">
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyOrders;
