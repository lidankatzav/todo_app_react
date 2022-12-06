import { List } from "./Todos_list";

export function Main({items}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <List items={items} />
    </section>
  );
}
