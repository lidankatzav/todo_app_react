import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const app_title = "Todos App";
  const entry_msg = "Whats need to be done?";
  let counter = 0;
  let todos = [
    { task_title: "Learn React", completed: false, id: Date.now()+14353},
    { task_title: "Listen to Nir", completed: false, id: Date.now()+54232},
    { task_title: "Learn JS", completed: false, id: Date.now()+2453},
  ];

  const addToDo = (title) => {
    todos.push({  task_title: title, completed: false, id: Date.now()});
    console.log(todos);
  };

  const removeToDo = (idToRemove) => {
    const todoIdxToRemove = todos.findIndex((item) => 
      item.id == idToRemove
    );
    if(todoIdxToRemove != -1) todos.splice(todoIdxToRemove, 1);
    console.log(todos);
  } 

  const markAsCompleted = (idToMark) => {
    const todoIdxToMark = todos.findIndex((item) => 
    item.id == idToMark
  );
    todos[todoIdxToMark].completed = !todos[todoIdxToMark].completed;
    console.log(todos);
  }

  const clearAllCompletedItems = () => {
    todos = todos.filter(item => !item.completed);
    console.log(todos);
  }

  const toggleAllItems = (checkedValue) => {
    todos = todos.map((item) => ({...item, completed: checkedValue}) );
    console.log(todos);
  };

  return (
    <section className="todoapp">
      <Header title={app_title} text={entry_msg} onAddItem={addToDo} />
      <Main items={todos} onToggleAllClick = {toggleAllItems} onRemoveClick={removeToDo} onMarkClick={markAsCompleted}/>
      <Footer onClearClick = {clearAllCompletedItems} itemsLeft = {counter}/>
    </section>
  );
}

export default App;
