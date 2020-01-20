import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import Appetizers from "../components/Appetizers/Appetizers";
import { Button } from "react-bootstrap";
// import { QorderProvider, useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import Profile from "./Profile";
function Menu() {
  const [app, setApp] = useState({ item: false });
  const [orderState, setOrderState] = useState({});
  console.log(orderState);
  function itemPreview(item) {
    setApp({ item: item });
    // console.log(app);
  }

  //   function addItem(item) {
  //     QorderProvider();
  //   }
  return (
    <div>
      {app.item === false ? (
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
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#Appetizers">
                  <Appetizers itemPreview={itemPreview}></Appetizers>
                </Tab.Pane>
                <Tab.Pane eventKey="#Drinks">{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey="#KidsMenu">{}</Tab.Pane>
                <Tab.Pane eventKey="#Deserts">{}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : (
        <div>
          <h1>{app.item.productName}</h1>
          <img src={app.item.imageURL}></img>
          <p>{app.item.description}</p>
          <p>{app.item.price}</p>
          <Link to="/My-Orders">
            <Button>Add</Button>
          </Link>
          <Button onClick={() => setApp({ item: false })}>Back</Button>
        </div>
      )}
    </div>
  );
}

export default Menu;
