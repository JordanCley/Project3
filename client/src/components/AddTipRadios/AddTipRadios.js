import React, { Component } from "react";
import { Link } from "react-router-dom";
function AddTipRadios() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form>
              <div className="form-check">
                <form>
                  <label>
                    <input
                      type="radio"
                      name="react-tips"
                      value="option1"
                      className="form-check-input"
                    />
                    10%
                    {/* Thinking of adding the tip percentage somewhere in this div form */}
                  </label>
                </form>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    className="form-check-input"
                  />
                  15%
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    className="form-check-input"
                  />
                  20%
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
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
