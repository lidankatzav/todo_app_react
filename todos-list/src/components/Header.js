export function Header(props) {
  function handleTaskInput(event) {
    if (event.key === "Enter") {
      props.onAddItem(event.target.value);
    }
  }

  const {title, text} = props;

  return (
    <header className="header">
      <h1>{title}</h1>
      <input
        className="new-todo"
        placeholder={text}
        onKeyUp={handleTaskInput}
        autoFocus
      />
    </header>
  );
}
