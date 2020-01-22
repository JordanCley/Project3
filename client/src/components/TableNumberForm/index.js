import React, { useContext, useState } from "react";
import { OrderContext } from "../../utils/context/OrderContext";
import API from "../../utils/API";

console.log(OrderContext)
function TableNumberForm () {
    const { orderState, handleInputChange, createOrderClick } = useContext(OrderContext);
    const [newTableNumber, setNewTableNumber] = useState({});
    
    //this function just grabs the input and console.logs it
    function handleTableInputChange(e) {
        setNewTableNumber({ data: e.target.value});
        
        console.log(e.target.value);
    };
    console.log(newTableNumber.data);

    // function addTableNumber() {
    //     return API.createOrder(
    //         orderState.tableNum
    //     )
    //     .then(res => {
    //         handleInputChange(res.data)
    //     })
    //     .catch(err => alert(err));
    // };

    return (
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
                <input
                    className="form-control"
                    type="text"
                    placeholder="A - 3 - T -2"
                    onChange={handleTableInputChange}
                    name="tableNum"
                ></input>
                    <button id="tableInputSubmit" type="submit" onClick={addTableNumber}>Enter</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default TableNumberForm;