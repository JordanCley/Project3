import React from "react";
<<<<<<< HEAD
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import Appetizers from "../components/Appetizers/Appetizers";
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
              <Tab.Pane eventKey="#KidsMenu">{}</Tab.Pane>
              <Tab.Pane eventKey="#Deserts">{}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
=======
import NavBar2 from "../components/NavBar2";

function Menu() {
    return(
        <div>
            <NavBar2 />
            This is the MENU page.
        </div>
    )
>>>>>>> 9fe4c64196d5f3e6c7de832f0ae4b14ac536c72c
}

export default Menu;
