import React from "react";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
        <nav class="main-navigation">
        <div class="navbar-header animated fadeInUp">
            <a class="navbar-brand" href="#"><img src = "https://www.clipartmax.com/png/full/422-4223441_important-clipart-todo-list-task-icon-mac.png"/></a>
        </div>
        <ul class="nav-list">
            <li class="nav-list-item">
                <Link to = {'/home'} class="nav-link">Home</Link>
            </li>
            <li class="nav-list-item">
                <Link to={'/sign-in'} class="nav-link">Sign In</Link>
            </li>
            <li class="nav-list-item">
                <Link to={'/todo-lists'} class="nav-link">Your Todo Lists</Link>
            </li>
        </ul>

    </nav>     
   </>
    );
}