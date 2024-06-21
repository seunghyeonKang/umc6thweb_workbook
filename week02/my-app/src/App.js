import { Modal } from "./practice02/Modal";
import React, { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false);

  function openModal() {
    console.log("모달이 켜짐");

    setIsModal(true);
  }

  return (
    <div>
      <h1>안녕하세요!</h1>
      <h4>내용입니다.</h4>
      <button onClick={openModal}>버튼 열기</button>
      <Modal isAppear={isModal} setAppear={setIsModal} />
    </div>
  );
}
export default App;
