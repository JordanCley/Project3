import React from "react";
//image currently taken from O.B. website, not images/assets path
//needs to get image and title from the API
//this button can likely be removed

function AppPreviewCard() {
    return (
        <div class="card" >
            <img src="https://az815214.vo.msecnd.net/web/items/03500/ccapp-03500-2x.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">props.App.Title in brackets?</h5>
                <p class="card-text">samething here but with the description</p>
                <a href="#" class="btn btn-primary">+</a>
            </div>
        </div>
    )
}

export default AppPreviewCard;