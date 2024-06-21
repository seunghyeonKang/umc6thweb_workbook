import React, { useState } from "react";
import { ListItem } from "./ListItem";

export function List(props) {
  let newId = 1;
  const [todos, setTodos] = useState([{ no: 0, todoText: "첫 todo" }]);
  if (props.newTodo !== "") {
    setTodos(todos.push({ no: newId, todoText: props.newTodo }));
    newId++;

    const newItem = document.createElement("div");
    newItem.innerHTML = `
        <ListItem
          key={todos.no}
          buttonEvent={props.buttonEvent}
          todoContents={todos.todoText}
        />
      `;
    document.querySelector(".list-container").appendChild(newItem);
  }

  const todoItems = todos.map((item) => {
    return (
      <ListItem
        key={item.no}
        buttonEvent={props.buttonEvent}
        todoContents={item.todoText}
      />
    );
  });

  return (
    <div className="list-container">
      <p>{props.listTitle}</p>
      <ul>{todoItems}</ul>
    </div>
  );
}
