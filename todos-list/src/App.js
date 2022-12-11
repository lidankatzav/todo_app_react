import "./App.css";
import React, { useRef, useState } from "react";
import {TodosApp} from "./components/Todos-App";
import { AuthContext } from "./components/providers/AuthContext";

function App() {

  const [appsNames, setAppNames] = useState([]);
  const userInputNameApp = useRef(null);
  const userName = useRef(null);
  const userPassword = useRef(null);
  const [userDeatils, setUserDeatils] = useState(null);

  const addToAppsNames = (event) => {
    if((event.type === "keyup" && event.key === "Enter") || event.type === "click") {
      const newAppsNames = appsNames.concat(userInputNameApp.current.value);
      setAppNames(newAppsNames);
    }
  }

  const updateUserDeatils = () => {
    if(userName.current.value && userPassword.current.value) {
      setUserDeatils({name: (userName.current.value), password: (userPassword.current.value)});
    }
  }

  return (
    userDeatils ? (
    <AuthContext.Provider value = {userDeatils.name}>
      <>
        <input onKeyUp = {addToAppsNames} ref = {userInputNameApp} type="text" autoFocus></input><text>   </text>
        <button onClick = {addToAppsNames}>ADD LIST</button>
      </>
      <>
        {appsNames.map((appName) => (
          <TodosApp appName={appName}/>
        ))}
      </>
    </AuthContext.Provider>
  ) : (
      <>
      <text>User Name:</text>
      <input ref= {userName}  type="text" autoFocus required></input><br/><br/>
      <text>Password:</text>
      <input ref={userPassword} type = "password" required></input><br/><br/>
      <button onClick = {updateUserDeatils} >Sumbit</button>
    </>
  ));
}

export default App;
