import React, { useState } from "react";
import { Modal } from "./Modal";

export function OpenModal() {
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
