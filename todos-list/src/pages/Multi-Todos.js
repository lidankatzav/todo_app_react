import React, { useContext, useRef, useState } from "react";
import {TodosApp} from "../components/Todos-App";
import { AuthContext } from "../providers/AuthContext";
import '../css/App.css'

export function MultiTodos() {

    const [appsNames, setAppNames] = useState([]);
    const userInputAppName = useRef(null);

    const addToAppsNames = (event) => {
        if((event.type === "keyup" && event.key === "Enter") || event.type === "click") {
          const newAppsNames = appsNames.concat(userInputAppName.current.value);
          setAppNames(newAppsNames);
          userInputAppName.current.value = "";
        }
    }

    const {userDeatils} = useContext(AuthContext);

    return (
      userDeatils ? (
        <>
            <>
            <br/><br/>
            <input onKeyUp = {addToAppsNames} ref = {userInputAppName} type="text" placeholder="List Title" autoFocus></input><text>   </text>
            <button onClick = {addToAppsNames}>ADD LIST</button>
            </>
            <>
            {appsNames.map((appName) => (
            <TodosApp appName={appName}/>
            ))}
            <br/><br/><br/>
            </>
      </>) : (
        <>
        <br/><br/><br/><br/>
        <h1 class="text-center"> Please Log In First!</h1>
        </>
      )
    );

}