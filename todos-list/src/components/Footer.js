export function Footer({onClearClick, itemsLeft}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> items left
      </span>
      <button className="clear-completed" onClick = {onClearClick}>Clear completed</button>
    </footer>
  );
}
