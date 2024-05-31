import "./ptc02_modal.css";

const open = document.getElementById("modal_open");
const close = document.getElementById("modal_close");
const modal = document.querySelector(".modal_content");
open.onclick = () => {
  modal.style.display = "block";
};
close.onclick = () => {
  modal.style.display = "none";
};
