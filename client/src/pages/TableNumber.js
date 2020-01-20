import React from "react";
import { useQorderContext } from "../utils/QorderStore";

function TableNumber() {
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="A - 3 - T -2"></textarea>
                </div>
            </form>
            </div>
        </div>
        
    )
}

export default TableNumber;