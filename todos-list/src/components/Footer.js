import React, { useContext } from "react";
import { ListContext } from "../providers/list-context";

export function Footer() {

  const {clearAllCompletedItems, itemsLeftCounter} = useContext(ListContext);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeftCounter}</strong> items left
      </span>
      <button className="clear-completed" onClick = {clearAllCompletedItems}>Clear completed</button>
    </footer>
  );
}
