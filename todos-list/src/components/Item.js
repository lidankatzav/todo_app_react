
export function Item({task_title, id, onRemoveClick, onMarkClick}) {


  function handleRemoveClick(event) {
    onRemoveClick(event.target.value);
  }

  function handleMarkClick(event) {
    onMarkClick(event.target.value);
  }

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleMarkClick} value = {id}/>
        <label>{task_title}</label>
        <button className="destroy" onClick={handleRemoveClick} value = {id}/>
      </div>
      <input className="edit" />
    </li>
  );
}
