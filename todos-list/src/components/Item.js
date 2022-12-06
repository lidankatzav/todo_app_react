

export function Item({task_title}) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{task_title}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}
