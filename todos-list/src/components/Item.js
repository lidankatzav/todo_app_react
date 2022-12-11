import React, { useContext } from "react";
import { ListContext } from "./providers/list-context";

export function Item({task_title, id, isCompleted, classNameForTodo}){

  const {removeToDo, markAsCompleted, editTodo, updateTodo} = useContext(ListContext);
  
  function handleRemoveClick(event) {
    removeToDo(event.target.value);
  }

  function handleMarkClick(event) {
    markAsCompleted(event.target.value);
  }

  function handleKeyUp(id, event) {
    if (event.key === "Enter" && classNameForTodo === "editing") {
      updateTodo(id, event.target.value);
    }
  }

  return (
    <li className = {classNameForTodo} onKeyUp = {(event) => handleKeyUp(id, event)}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleMarkClick} value = {id} checked = {isCompleted}/>
        <label onClick = {() => editTodo(id)}>{task_title}</label>
        <button className="destroy" onClick={handleRemoveClick} value = {id}/>
      </div>
      <input className="edit" />
    </li>
  );
};
