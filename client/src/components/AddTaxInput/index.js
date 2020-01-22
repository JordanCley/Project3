import React, { useState } from "react";

function TaxField() {
    const [taxInput, setTaxInput] = useState({ data: "" });

    function handleInputChange(e) {
        setTaxInput({ data: e.target.value})
        console.log(e.target.value);
    }

    console.log(taxInput.data)
        return (
            <div className="form-group">
                <label>Tax :</label>
                <input
                    className="form-control" 
                    id="taxAmountInput" 
                    type="number" 
                    min="0" max="20"
                    default="10"
                    placeholder="10%" 
                    onChange={handleInputChange} 
                />
            </div>
        )
};

export default TaxField;