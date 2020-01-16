import React from "react";
import TableNumberForm from "../components/TableNumberForm.js";

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
                <TableNumberForm />
            </div>
        </div>
        
    )
}

export default TableNumber;