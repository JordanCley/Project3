import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function MyOrders() {
  return (
    <Container fluid>
      <Row>
        <img
          className="d-block w-100 mx-auto"
          src="https://bbimenus.blob.core.windows.net/items/03501/ccapp-03501-2x.png"
          alt="background image"
          style={{opacity: 0.5}}
        />
      </Row>
      <Row className="text-center mt-4 mb-4">
        <Col lg={12}>
          <p>This is the View My Orders Page.</p>
          <Button variant="outline-danger mr-2" size="lg" href="/menu">
            Back To Menu
          </Button>
          <Button variant="outline-success ml-2" size="lg" href="/view-check">
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyOrders;
