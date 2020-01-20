import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import Appetizers from "../components/Appetizers/Appetizers";
import { Button } from "react-bootstrap";
// import { QorderProvider, useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import Profile from "./Profile";
function Menu() {
  // Setting the state of the page to be initially false
  const [app, setApp] = useState({ item: false });

  //not working yet
  //   const [orderState, setOrderState] = useState({});

  // this is what displays the Pane inside the tab
  function itemPreview(item) {
    setApp({ item: item });
    // console.log(app); just testing
  }

  //   disregard doesnt work
  // function addItem(item) {
  //     QorderProvider();
  //   }

  return (
    //bootstrap react's tab and pane
    <div>
      {/* if initial app.item is false to show the original tabs */}
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
                  {/* this is where you put what you wish to populate the pane with */}
                  <Appetizers itemPreview={itemPreview}></Appetizers>
                </Tab.Pane>
                <Tab.Pane eventKey="#Drinks">{}</Tab.Pane>
                <Tab.Pane eventKey="#KidsMenu">{}</Tab.Pane>
                <Tab.Pane eventKey="#Deserts">{}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : (
        //   this renders the appetizer preview with add and back button after clicking on one of the card
        //   also changes the state to true and renders the preview page
        //   This could be the AppetizerPreview.js
        <div>
          <h1>{app.item.productName}</h1>
          <img src={app.item.imageURL}></img>
          <p>{app.item.description}</p>
          <p>{app.item.price}</p>
          {/* need to make this work */}
          <Link to="/My-Orders">
            <Button>Add</Button>
          </Link>
          {/* makes the state back to false when pressing on the back button to redirect the page back to main menu */}
          <Button onClick={() => setApp({ item: false })}>Back</Button>
        </div>
      )}
    </div>
  );
}

export default Menu;
