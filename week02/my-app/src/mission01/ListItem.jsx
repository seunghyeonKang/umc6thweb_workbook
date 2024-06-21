import React, { useState } from "react";

export function ListItem(props) {
  return (
    <div>
      <p>{props.todoText}</p>
      <button>{props.buttonEvent}</button>
    </div>
  );
}
