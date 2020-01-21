import React from "react";

function NavBar2() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/">
                <button>◀️</button>
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