import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppetizerCards from "../components/AppetizerCards/AppetizerCards";
import { Button } from "react-bootstrap";
import MenuList from "../MenuList/MenuList";
function IndividualCardRender() {
  const [app, setApp] = useState({});
  function itemPreview(chosenItem) {
    setApp({ chosenItem: chosenItem });
    // console.log(app); just testing
  }
  return (
    <div>
      <h1>{app.chosenItem.productName}</h1>
      <img src={app.chosenItem.imageURL}></img>
      <p>{app.chosenItem.description}</p>
      <p>{app.chosenItem.price}</p>
      {/* need to make this work */}
      <Link to="/My-Orders">
        <Button>Add</Button>
      </Link>
      {/* makes the state back to false when pressing on the back button to redirect the page back to main menu */}
      <Button onClick={() => setApp({ chosenItem: false })}>Back</Button>
    </div>
  );
}

export default IndividualCardRender;
