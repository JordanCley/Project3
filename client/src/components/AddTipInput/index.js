//Get Tip Amount from AddTip.js OR AddTipRadios to Set Initial for Tip

import React, { useState } from "react";

function TipField() {
    const [tipInput, setTipInput] = useState({data: ""});

    function handleInputChange(e) {
        setTipInput({ data: e.target.value})
        console.log(e.target.value);
    }

    console.log(tipInput.data)
        return (
            <div className="form-group">
                <label>Tip :</label>
                <input
                    className="form-control" 
                    id="tipAmountInput" 
                    type="number" 
                    min="0" max="99" 
                    placeholder="15%" 
                    onChange={handleInputChange} 
                />
            </div>
        )
};

export default TipField;