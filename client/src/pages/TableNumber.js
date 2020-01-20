import React, { useEffect, useState } from "react";
import { useQorderContext } from "../utils/QorderStore";
import { ADD_TABLENUM } from "../utils/actions";
import API from "../utils/API";

function TableNumber() {
    const [tableNumber, setTableNumber] = useState();
    const [state, dispatch] = useQorderContext();

//Here is the createOrder function where I am trying to "Add Table Number" to the tableNum state
    const createOrder = id => {
        API.createOrder(id)
        .then(results => {
            dispatch({
                type: ADD_TABLENUM,
                _id: results.data
            });
        }).then(console.log(tableNumber))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        createOrder();
    }, []);
    

    return(
        <div>
            <div>
                ENTER THE 4 - DIGIT CODE
            </div>
            <div>
                (Found below the QR Code on the Table)
            </div>
            <div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="A - 3 - T -2">{tableNumber}</textarea>
                    <button type="submit">Enter</button>
                </div>
            </form>
            </div>
        </div>
        
    )
}

export default TableNumber;