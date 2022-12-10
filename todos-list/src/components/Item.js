
export function Item({task_title, id, onRemoveClick, onMarkClick, isCompleted, classNameForTodo, onDoubleClick, onEnterClick}){

  function handleRemoveClick(event) {
    onRemoveClick(event.target.value);
  }

  function handleMarkClick(event) {
    onMarkClick(event.target.value);
  }

  function handleKeyUp(id, event) {
    if (event.key === "Enter" && classNameForTodo === "editing") {
      onEnterClick(id, event.target.value);
    }
  }

  return (
    <li className = {classNameForTodo} onKeyUp = {(event) => handleKeyUp(id, event)}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleMarkClick} value = {id} checked = {isCompleted}/>
        <label onClick = {() => onDoubleClick(id)}>{task_title}</label>
        <button className="destroy" onClick={handleRemoveClick} value = {id}/>
      </div>
      <input className="edit" />
    </li>
  );
};
