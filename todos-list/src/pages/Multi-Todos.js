import React, { useRef, useState } from "react";
import {TodosApp} from "../components/Todos-App";

export function MultiTodos() {

    const [appsNames, setAppNames] = useState([]);
    const userInputAppName = useRef(null);

    const addToAppsNames = (event) => {
        if((event.type === "keyup" && event.key === "Enter") || event.type === "click") {
          const newAppsNames = appsNames.concat(userInputAppName.current.value);
          setAppNames(newAppsNames);
        }
      }

    return (
        <>
            <>
            <input onKeyUp = {addToAppsNames} ref = {userInputAppName} type="text" autoFocus></input><text>   </text>
            <button onClick = {addToAppsNames}>ADD LIST</button>
            </>
            <>
            {appsNames.map((appName) => (
            <TodosApp appName={appName}/>
            ))}
            </>
      </>
    );



}