import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import AppetizerCards from "../AppetizerCards/AppetizerCards";
import { Button } from "react-bootstrap";
import '../../index.css';
import './MenuList.css';

// import { QorderProvider, useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
// import Profile from "./Profile";
function MenuList() {
  // Setting the state of the page to be initially false
  const [app, setApp] = useState({ chosenItem: false });

  //not working yet
  //   const [orderState, setOrderState] = useState({});

  // this is what displays the Pane inside the tab
  function itemPreview(chosenItem) {
    setApp({ chosenItem: chosenItem });
    // console.log(app); just testing
  }

  //   disregard doesnt work
  // function addItem(item) {
  //     QorderProvider();
  //   }

  return (
    //bootstrap react rendering for the menu tab and pane
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
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane id="appetizer-pane" eventKey="#Appetizers">
                {/* this is where you put what you wish to populate the pane with */}
                <AppetizerCards itemPreview={itemPreview}></AppetizerCards>
              </Tab.Pane>
              <Tab.Pane eventKey="#Drinks">{}</Tab.Pane>
              <Tab.Pane eventKey="#KidsMenu">{}</Tab.Pane>
              <Tab.Pane eventKey="#Deserts">{}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default MenuList;
