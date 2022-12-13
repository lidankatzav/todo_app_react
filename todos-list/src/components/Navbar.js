import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const {userDeatils, setUserDeatils} = useContext(AuthContext);
    let navigate = useNavigate();

    const handleSignOut = () => {
        setUserDeatils(null);
        navigate('/home');
    }

    
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
            {!userDeatils && <li class="nav-list-item">
                <Link to={'/sign-in'} class="nav-link">Log In</Link>
            </li>}
            {userDeatils && <li class="nav-list-item">
                <Link to={'/todo-lists'} class="nav-link">Your Todo Lists</Link>
            </li>
            }
           {userDeatils && 
           <li class="nav-list-item" >
                <button onClick = {handleSignOut}>Log Out</button>
            </li> }
        </ul>

    </nav>     
   </>
    );
}