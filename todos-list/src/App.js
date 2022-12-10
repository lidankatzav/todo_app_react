import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";


function App() {
  const app_title = "Todos App";
  const entry_msg = "Whats need to be done?";
  const [todos, setTodos] = useState([]);
  const [itemsLeftCounter, setItemsLeftCounter] = useState(0);

  useEffect(() => {
    const todosLeft = todos.filter( todo => !todo.completed );
    setItemsLeftCounter(todosLeft.length);
  },[todos] );

  const addToDo = (title) => {
    const newTodos = todos.concat({  task_title: title, completed: false , id: Date.now(), classNameForLabel: "view"});
    setTodos(newTodos);
  };

  const removeToDo = (idToRemove) => {
    const newTodos = todos.filter(item => item.id != idToRemove)
    setTodos(newTodos);
  } 

  const markAsCompleted = (idToMark) => {
    const newTodos = todos.map(item => {
      if(item.id == idToMark) {
        item.completed = !item.completed;
        item.classNameForLabel = item.completed? "completed": "view";
      }
      return item;
    });
    setTodos(newTodos);
  }

  const clearAllCompletedItems = () => {
    const newTodos = todos.filter(item => !item.completed);
    setTodos(newTodos);
  }

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map((item) => ({...item, completed: checkedValue, classNameForLabel: checkedValue? "completed":"view"}) );
    setTodos(newTodos);
  };

  const editTodo = (dbClickTodoID) => {
    const newTodos = todos.map(item => {
      if(item.id == dbClickTodoID) {
        item.classNameForLabel = "editing";
      }
      return item;
    });
    setTodos(newTodos);
  }

  const updateTodo = (idToUpdate, textToUpdate) => {
    const newTodos = todos.map(item => {
      if(item.id == idToUpdate) {
        item.task_title = textToUpdate;
        item.classNameForLabel = "view";
      }
      return item;
    });
    setTodos(newTodos);
  }

  return (
    <section className="todoapp">
      <Header title={app_title} text={entry_msg} onAddItem={addToDo} />
      <Main items={todos} onToggleAllClick = {toggleAllItems} onRemoveClick={removeToDo} onMarkClick={markAsCompleted} onDoubleClick = {editTodo} onEnterClick = {updateTodo}/>
      <Footer onClearClick = {clearAllCompletedItems} itemsLeft = {itemsLeftCounter}/>
    </section>
  );
}

export default App;
