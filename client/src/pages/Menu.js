import React from "react";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
// import Dummy from "../components/Dummy";
// import { Header } from "react-bootstrap/lib/Modal";

function Menu() {
  return (
    <div>
      <Tab.Container
        id="list-group-tabs-example"
        defaultActiveKey="#Appetizers"
      >
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#Appetizers">
                Appetizers
              </ListGroup.Item>
              <ListGroup.Item action href="#Drinks">
                Drinks
              </ListGroup.Item>
              <ListGroup.Item action href="#KidsMenu">
                Kid's Menu
              </ListGroup.Item>
              <ListGroup.Item action href="#Deserts">
                Deserts
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="#Appetizers">{}</Tab.Pane>
              <Tab.Pane eventKey="#Drinks">{/* <Sonnet /> */}</Tab.Pane>
              <Tab.Pane evenyKey="#KidsMenu">{}</Tab.Pane>
              <Tab.Pane eventKey="#Deserts">{}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Menu;
