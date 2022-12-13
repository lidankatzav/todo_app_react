import React, { useContext, useRef} from "react";
import { AuthContext } from "../providers/AuthContext";

export function SignIn() {

    const userName = useRef(null);
    const userPassword = useRef(null);
    const setUserDeatils = useContext(AuthContext);
  
    const updateUserDeatils = (event) => {
      if((event.type === "keyup" && event.key === "Enter") || event.type === "click") {
        if(userName.current.value && userPassword.current.value) {
          setUserDeatils({name: (userName.current.value), password: (userPassword.current.value)});
        }
      }
    }

    return (
    // <form onKeyUp={updateUserDeatils}>
    //     <text>User Name:</text>
    //     <input ref= {userName}  type="text" autoFocus required></input><br/><br/>
    //     <text>Password:</text>
    //     <input ref={userPassword} type = "password" required></input><br/><br/>
    //     <button onClick = {updateUserDeatils} type = "button">Sumbit</button>
    // </form>
    <>

<nav class="main-navigation">
        <div class="navbar-header animated fadeInUp">
            <a class="navbar-brand" href="#"><img src = "https://www.clipartmax.com/png/full/422-4223441_important-clipart-todo-list-task-icon-mac.png"/></a>
        </div>
        <ul class="nav-list">
            <li class="nav-list-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-list-item">
                <a href="#" class="nav-link">Sign In</a>
            </li>
            <li class="nav-list-item">
                <a href="#" class="nav-link">Your Todo Lists</a>
            </li>
        </ul>

    </nav>

    <div class="wrapper fadeInDown mt-5">
    <div id="formContent">
  
      <form>
        <input className = "mt-3" type="text" id="login" class="fadeIn second" name="login" placeholder="Name"/>
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>
        <input type="submit" class="fadeIn fourth" value="Log In"/>
      </form>

  
    </div>
  </div>
  </>
);
}