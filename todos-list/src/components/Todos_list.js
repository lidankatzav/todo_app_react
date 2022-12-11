import React from "react";
import { Item } from "./Item";

export function List({items, onRemoveClick, onMarkClick, onDoubleClick, onEnterClick}) {

   return (
    <ul className="todo-list">
      {items.map((item) => (
        <Item task_title={item.task_title} key = {item.id}  id={item.id} onRemoveClick={onRemoveClick} onMarkClick={onMarkClick} isCompleted = {item.completed} classNameForTodo = {item.classNameForLabel} onDoubleClick = {onDoubleClick} onEnterClick = {onEnterClick}/>
      ))}
    </ul>
  );
}
