import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';

function CardInfo() {
  return (
    <div className="card-info-page bg-table-in-vintage-restaurant">
      <div>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Credit Card Number:</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="0000-0000-0000-0000"
            />
          </div>
          <div class="row">
            <div class="col">
              <label>Exp. Date:</label>
              <input type="text" class="form-control" placeholder="MM/YY" />
            </div>
            <div class="col">
              <label>CVC:</label>
              <input
                type="text"
                class="form-control"
                placeholder="On back of Card"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Name on Card</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Michael J. Fox"
            />
          </div>
        </form>
      </div>
      <Link to="/view-check">
        <Button>Back</Button>
      </Link>
      <Link to="/add-tip">
        <Button>Continue</Button>
      </Link>
    </div>
  );
}

export default CardInfo;
