import React, { useState } from "react";
import "./TodoList.css";
import { List } from "./mission01/List";

function TodoList() {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    // { content: "React", isDone: false, id: 101 },
    // { content: "JavaScript", isDone: false, id: 102 },
    // { content: "html", isDone: true, id: 103 },
    // { content: "css", isDone: true, id: 104 },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prev) => {
      return prev.concat({ content, isDone: false, id: Date.now() });
    });
    setContent("");
  };

  const handleDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>UMC Study Plan</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UMC 스터디 계획을 작성해보세요"
          onChange={(event) => {
            return setContent(event.target.value.trim());
          }}
          value={content}
        />
      </form>

      <section>
        <div>
          <h2>해야 할 일</h2>
          <ul>
            {todos.map((todo) => {
              return (
                !todo.isDone && (
                  <List
                    key={todo.id}
                    content={todo.content}
                    moveButton={"완료"}
                    handleToggle={() => handleDone(todo.id)}
                  />
                )
              );
            })}
          </ul>
        </div>

        <div>
          <h2>해낸 일</h2>
          <ul>
            {todos.map((todo) => {
              return (
                todo.isDone && (
                  <List
                    key={todo.id}
                    content={todo.content}
                    moveButton={"삭제"}
                    handleToggle={() => handleDelete(todo.id)}
                  />
                )
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
export default TodoList;
