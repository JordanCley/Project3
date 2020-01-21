import React from "react";

function TableNumberForm () {
    
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
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <input className="form-control" type="text" placeholder="A - 3 - T -2"></input>
                    <button type="submit" className="btn btn-primary">Enter</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default TableNumberForm;