import "./List.css";

export function List({ content, moveButton, handleToggle }) {
  return (
    <li>
      <p>{content}</p>
      <button onClick={handleToggle}>{moveButton}</button>
    </li>
  );
}
