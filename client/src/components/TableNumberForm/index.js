import React from "react";
import { OrderContext } from "../../utils/context/OrderContext";

 console.log(OrderContext)
function TableNumberForm () {
    const { orderState, handleInputChange } = useContext(OrderContext);
    const [newTableNumber, setNewTableNumber] = useState("");

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
                    onChange={handleInputChange}
                    name="tableNum"
                    value={orderState.tableNum}
                ></input>
                    <button type="submit">Enter</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default TableNumberForm;