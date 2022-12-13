import React, { useContext } from "react";
import { ListContext } from "../providers/list-context";
import { AuthContext } from "../providers/AuthContext";

export function Header({title}) {

  const {addToDo} = useContext(ListContext);
  const {userDeatils} = useContext(AuthContext);

  function handleTaskInput(event) {
    if (event.key === "Enter") {
      addToDo(event.target.value);
      event.target.value = "";
    }
  }
  
  return (
    <>
    <header className="header">
      <h1>{title}</h1>
      <input
        className="new-todo"
        placeholder= {`${userDeatils.name}, whats need to be done?`}
        onKeyUp={handleTaskInput}
        autoFocus
      />
    </header>
    </>
  );
}
