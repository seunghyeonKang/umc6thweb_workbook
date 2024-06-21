import React, { useState } from "react";
import { List } from "./mission01/List";
import "./TodoList.css";

function TodoList() {
  const [newTodo, setTodo] = useState("todo");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodo(document.querySelector("form input").value.trim());
    document.querySelector("form input").value = "";
  };

  return (
    <>
      <h1>UMC Study Plan</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="UMC 스터디 계획을 작성해보세요" />
      </form>
      <div>
        <List listTitle={"해야 할 일"} newTodo={newTodo} buttonEvent={"완료"} />
        {/* <List listTitle={"해낸 일"} buttonEvent={"삭제"} /> */}
      </div>
    </>
  );
}
export default TodoList;
