import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../utils/context/OrderContext";

function AddTipRadios() {
  const { openCheckState, resetTipMethod, handleTipChange, tipMethodState, handleTipMethodChange } = useContext(OrderContext);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            {tipMethodState.tipMethod === "radioTip" ? (
              <form>
                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipChange}
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
                      onChange={handleTipChange}
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
                      onChange={handleTipChange}
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
                      onChange={handleTipMethodChange}
                      value="customTip"
                      checked={tipMethodState.tipMethod === "customTip"}
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
                  onChange={handleTipChange}
                  name="gratuity"
                  value={openCheckState.gratuity || ""}
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
