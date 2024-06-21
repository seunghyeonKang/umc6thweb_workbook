import "./Modal.css";

export function Modal(props) {
  function closeModal() {
    console.log("모달이 꺼짐");

    props.setAppear(false);
  }

  return (
    <div style={props.isAppear ? { display: "block" } : { display: "none" }}>
      <div className="background"></div>

      <div className="modal-container">
        <h2>안녕하세요</h2>
        <h4>모달 내용입니다. 어쩌구 저쩌구...</h4>
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
}
