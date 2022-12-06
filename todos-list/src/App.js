import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const app_title = "Todos App";
  const entry_msg = "Whats need to be done?";
  const todos = [
    { task_title: "Learn React", completed: false },
    { task_title: "Listen to Nir", completed: false },
    { task_title: "Learn JS", completed: true },
  ];
  const add_todo = (title) => {
    todos.push({ title, completed: false });
  };

  return (
    <section className="todoapp">
      <Header title={app_title} text={entry_msg} onAddItem={add_todo} />
      <Main items={todos} />
      <Footer />
    </section>
  );
}

export default App;
