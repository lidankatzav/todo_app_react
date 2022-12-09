import { List } from "./Todos_list";

export function Main({items, onRemoveClick, onMarkClick, onToggleAllClick}) {

  const handleToggleAll = (event) => {
    onToggleAllClick(event.target.checked)
  }
  
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onClick = {handleToggleAll}/>
      <List items={items} onRemoveClick={onRemoveClick}  onMarkClick={onMarkClick}/>
    </section>
  );
}
