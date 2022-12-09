
export function Item({task_title, id, onRemoveClick, onMarkClick, isCompleted, classNameForLabel}){

  function handleRemoveClick(event) {
    onRemoveClick(event.target.value);
  }

  function handleMarkClick(event) {
    onMarkClick(event.target.value);
  }


  return (
    <li className = {classNameForLabel}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={handleMarkClick} value = {id} checked = {isCompleted}/>
        <label>{task_title}</label>
        <button className="destroy" onClick={handleRemoveClick} value = {id}/>
      </div>
      <input className="edit" />
    </li>
  );
};
