import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../utils/context/OrderContext";

function AddTipRadios() {
  const { orderState, handleInputChange, resetTipMethod } = useContext(OrderContext);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            {orderState.tipMethod === "radioTip" ? (
              <form>
                <div className="form-check">
                  <label>
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="gratuity"
                      value={10}
                      className="form-check-input"
                    />
                    10%
                    {/* Thinking of adding the tip percentage somewhere in this div form */}
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="gratuity"
                      value={15}
                      className="form-check-input"
                    />
                    15%
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="gratuity"
                      value={20}
                      className="form-check-input"
                    />
                    20%
                  </label>
                </div>
                <div className="form-check">
                  <label>
                    <input
                      onChange={handleInputChange}
                      value="customTip"
                      checked={orderState.tipMethod === "customTip"}
                      type="radio"
                      name="tipMethod"
                      className="form-check-input"
                    />
                    Other
                  </label>
                </div>
              </form>
            ) : (
              <div>
                <input
                  type="number"
                  onChange={handleInputChange}
                  name="gratuity"
                  value={orderState.gratuity || ""}
                  // placeholder="please enter a percentage"
                ></input>
              </div>
            )}
            <div className="form-group">
              <Link to="/confirm-pay">
                <button onClick={resetTipMethod} className="btn btn-primary mt-2">Continue</button>
              </Link>
              <Link to="/card-info">
                <button onClick={resetTipMethod} className="btn btn-primary mt-2">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTipRadios;
