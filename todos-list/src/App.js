import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import {useTodos} from "./hooks/useTodos";

function App() {
  const app_title = "Todos App";
  const entry_msg = "Whats need to be done?";
  const {todos, itemsLeftCounter, addToDo, removeToDo, markAsCompleted, clearAllCompletedItems, toggleAllItems, 
    editTodo, updateTodo} = useTodos();

  return (
    <section className="todoapp">
      <Header title={app_title} text={entry_msg} onAddItem={addToDo} />
      <Main items={todos} onToggleAllClick = {toggleAllItems} onRemoveClick={removeToDo} onMarkClick={markAsCompleted} onDoubleClick = {editTodo} onEnterClick = {updateTodo}/>
      <Footer onClearClick = {clearAllCompletedItems} itemsLeft = {itemsLeftCounter}/>
    </section>
  );
}

export default App;
