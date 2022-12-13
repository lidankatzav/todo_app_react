import React, { useContext } from "react";
import { Item } from "./Item";
import { ListContext } from "../providers/list-context";

export function List() {

  const {todos} = useContext(ListContext);

   return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Item task_title={item.task_title} key = {item.id}  id={item.id}
         isCompleted = {item.completed} classNameForTodo = {item.classNameForLabel}/>
      ))}
    </ul>
  );
}
