import React from "react";

function ThankYouAlert() {
    return (
        <div className="container">
            <h4 className="alert-heading">Thank You!</h4>
            <p>Your payment has been sent.</p>
            <a href="/profile">
                <button>OK</button>
            </a>
            
        </div>
    )
}

export default ThankYouAlert;