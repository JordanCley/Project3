import React, { useState, useEffect } from "react";
import Appetizer from "./Appetizer";

import API from "../../utils/API";

function Appetizers() {
  const [app, setApp] = useState([]);
  useEffect(() => {
    loadApps();
  }, []);

  function loadApps() {
    API.getProducts()
      .then(res => setApp(res.data))
      .catch(err => console.log(err));
  }

  return <Appetizer></Appetizer>;
}
export default Appetizers;
