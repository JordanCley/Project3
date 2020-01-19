import React from "react";

function NavBar2() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <svg class="bi bi-skip-start-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000" stroke-linecap="round" d="M6.5 6v8">
                    </path>
                    <path d="M6.903 10.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V6.308c0-.63-.692-1.01-1.232-.696L6.903 9.304a.802.802 0 000 1.393z">
                    </path>
                </svg>
                    Qorder
                </a>
                <a class="navbar-brand" href="/menu">
                    Menu
                </a>
                <a class="navbar-brand" href="/card-info">
                <svg class="bi bi-credit-card" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd">
                    </path>
                    <rect width="3" height="3" x="4" y="11" rx="1">
                    </rect>
                    <path d="M3 7h14v2H3z">
                    </path>
                </svg>
                </a>
                <a class="navbar-brand" href="/my-orders">
                <div class="p-3 py-4 mb-2 bg-light text-center rounded">
                <svg class="bi bi-bucket-fill" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 3.5A4.5 4.5 0 005.5 8h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 0010 3.5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M3.61 7.687A.5.5 0 014 7.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H6.802a1.5 1.5 0 01-1.464-1.175L3.512 8.108a.5.5 0 01.098-.42z" clip-rule="evenodd"></path>
                </svg>
                </div>
                </a>
            </nav>
        </div>
    )
}

export default NavBar2;