// 유효성 검사

// 제출
const modalBG = document.querySelector("div.background");
const modalComponent = document.querySelector("div.modal");

document.querySelector("div.signin button").addEventListener("click", () => {
  modalBG.style.display = "block";
  modalComponent.style.display = "block";

  // 제출 금지
  event.preventDefault();
});

document.querySelector("div.modal button").addEventListener("click", () => {
  modalBG.style.display = "none";
  modalComponent.style.display = "none";
});
