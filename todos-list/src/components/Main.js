
import { List } from "./Todos_list";

export function Main({items, onRemoveClick, onMarkClick, onToggleAllClick, onDoubleClick, onEnterClick}) {

  function handleToggleAll(event) {
    onToggleAllClick(event.target.checked)
  }
  
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onChange = {handleToggleAll}/>
      <List items={items} onRemoveClick={onRemoveClick} onMarkClick={onMarkClick} onDoubleClick = {onDoubleClick} onEnterClick = {onEnterClick}/>
    </section>
  );
}
