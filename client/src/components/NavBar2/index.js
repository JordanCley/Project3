import React from "react";

function NavBar2() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <button>◀️</button>
                <a class="navbar-brand" href="/">
                    Qorder
                </a>
                <a class="navbar-brand" href="/menu">
                    Menu
                </a>
                <a class="navbar-brand" href="/card-info">
                    <span role="img">
                        <button>💳</button>
                    </span>
                </a>
                <a class="navbar-brand" href="/my-orders">
                <button>🛒</button>
                </a>
            </nav>
        </div>
    )
}

export default NavBar2;