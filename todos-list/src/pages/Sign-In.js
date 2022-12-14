import React, { useContext, useRef} from "react";
import { AuthContext } from "../providers/AuthContext";
import { useNavigate } from 'react-router-dom';
import '../css/Sign-In.css';

export function SignIn() {

    const userName = useRef(null);
    const userPassword = useRef(null);
    const {setUserDeatils, userDeatils} = useContext(AuthContext);
    let navigate = useNavigate();
  
    const updateUserDeatils = (event) => {
      if((event.type === "keyup" && event.key === "Enter") || event.type === "click") {
        if(userName.current.value && userPassword.current.value) {
          setUserDeatils({name: (userName.current.value), password: (userPassword.current.value)});
          navigate('/home');
        }
      }
    }

    return (
      !userDeatils ? (
    <>
    <div class="wrapper fadeInDown mt-5">
    <div id="formContent">
  
      <form onKeyUp={updateUserDeatils}>
        <input ref= {userName} className = "mt-3" type="text" id="login" class="fadeIn second" name="login" placeholder="Name"/>
        <input ref= {userPassword} type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>
        <input onClick = {updateUserDeatils} type="button" class="fadeIn fourth" value="Log In"/>
      </form>

    </div>
  </div>
  </> ) : (
    <>
    <br/><br/><br/><br/>
    <h1 class = "text-center">You're already logged in</h1>
    </>
  )
);
}
