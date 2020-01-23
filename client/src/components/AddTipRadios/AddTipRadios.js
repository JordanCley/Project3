import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../utils/context/OrderContext";

function AddTipRadios() {
  const { orderState, handleInputChange } = useContext(OrderContext);
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form>
              <div className="form-check">
                <label>
                  <input
                    onChange={handleInputChange}
                    type="radio"
                    name="gratutity"
                    value=".10"
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
                    name="gratutity"
                    value=".15"
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
                    name="gratutity"
                    value=".20"
                    className="form-check-input"
                  />
                  20%
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="gratuity"
                    value={orderState.gratutity || ""}
                    placeholder="Other"
                    className="form-check-input"
                  />
                  Other
                </label>
              </div>
              <div className="form-group">
                <Link to="/confirm-pay">
                  <button className="btn btn-primary mt-2">Continue</button>
                </Link>
                <Link to="/card-info">
                  <button className="btn btn-primary mt-2">Back</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTipRadios;
