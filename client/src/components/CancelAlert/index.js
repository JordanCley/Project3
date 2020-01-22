import React from "react";

function CancelAlert() {
    return (
        <div class="alert alert-warning" role="alert">
            <h4 class="alert-heading">Cancel?</h4>
            <p>Are you sure you want to cancel your payment?</p>
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}

export default CancelAlert;