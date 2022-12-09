import { Item } from "./Item";

export function List({items, onRemoveClick, onMarkClick}) {
  
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <Item task_title={item.task_title} id={item.id} onRemoveClick={onRemoveClick} onMarkClick={onMarkClick} isCompleted = {item.completed}/>
      ))}
    </ul>
  );
}
