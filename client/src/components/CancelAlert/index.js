import React from "react";

function CancelAlert() {
    return (
        <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Cancel?</h4>
            <p>Are you sure you want to cancel your payment?</p>
            <a href="my-orders">
                <button>Yes</button>
            </a>
            <a href="confirm-pay">
                <button>No</button>
            </a>
        </div>
    )
}

export default CancelAlert;