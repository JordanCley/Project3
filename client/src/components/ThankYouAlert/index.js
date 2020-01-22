import React from "react";

function ThankYouAlert() {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Thank You!</h4>
            <p>Your payment has been sent.</p>
            <button>OK</button>
        </div>
    )
}

export default ThankYouAlert;