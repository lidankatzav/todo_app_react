import { Item } from "./Item";

export function List({ items }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <Item task_title={item.task_title} />
      ))}
    </ul>
  );
}
