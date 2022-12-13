import { useEffect, useState } from "react";

export function useTodos() {
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
    console.log(newTodos);
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
  
  return {
    todos, itemsLeftCounter, addToDo, removeToDo, markAsCompleted, clearAllCompletedItems, toggleAllItems, 
    editTodo, updateTodo
  }
}