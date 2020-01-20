import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import API from '../../src/utils/API'
import './Stylesheets/MyOrders.css';

function MyOrders() {
    const [order, setOrder] = useState([])

    useEffect(() => {
        loadOrder();
      }, []);

    function loadOrder() {
    API.getProducts()
        .then(res => setOrder(res.data[0].description))
        .catch(err => console.log(err));
    }


  return (
    <Container fluid>
      <Row>
        <img
          className="d-block w-100 mx-auto"
          src="https://bbimenus.blob.core.windows.net/items/03501/ccapp-03501-2x.png"
          alt="background image"
          style={{opacity: 0.5}}
        />
        <p>{order}</p>
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
