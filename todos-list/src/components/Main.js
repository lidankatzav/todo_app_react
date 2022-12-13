import { ListContext } from "../providers/list-context";
import React, { useContext } from "react";
import { List } from "./Todos_list";

export function Main() {

  const {toggleAllItems} = useContext(ListContext);

  function handleToggleAll(event) {
    toggleAllItems(event.target.checked)
  }
  
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onChange = {handleToggleAll}/>
      <List/>
    </section>
  );
}
