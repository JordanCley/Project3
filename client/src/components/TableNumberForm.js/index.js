import React, { useContext } from "react";
import { OrderContext } from "../../utils/context/OrderContext";
import { Link } from "react-router-dom";

function TableNumberForm() {
  const { orderState, handleInputChange } = useContext(OrderContext);

  return (
    <div>
      <div>ENTER THE 4 - DIGIT CODE</div>
      <div>(Found below the QR Code on the Table)</div>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1"></label>
            <input
              className="form-control"
              type="text"
              placeholder="A - 3 - T -2"
              onChange={handleInputChange}
              name="tableNum"
              value={orderState.tableNum}
            ></input>
            <Link to="/menu">
              <button className="btn btn-primary">
                Enter
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TableNumberForm;
