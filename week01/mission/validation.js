const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&.,^#])[A-Za-z\d@$!%*?&.,^#]{4,12}$/;

// error text 및 모달 변수
const nameText = document.querySelector("form p.name");
const emailText = document.querySelector("form p.email");
const ageText = document.querySelector("form p.age");
const pwText = document.querySelector("form p.password");
const confirmPwText = document.querySelector("form p.confirm_password");

const modalBG = document.querySelector("div.background");
const modalBox = document.querySelector("div.modal");

// 메세지 입력 함수
function setText(text, textMessage, isError) {
  text.textContent = textMessage;
  if (isError) {
    text.classList.add("error");
  } else {
    text.classList.remove("error");
  }
}

// 제출 - 유효성 검사 함수
document.querySelector("form").addEventListener("submit", submitValid);

function submitValid(event) {
  event.preventDefault();
  console.log("제출");

  let isValid = true;

  // input 변수
  const nameInput = document.querySelector("form input.name").value.trim();
  const emailInput = document.querySelector("form input.email").value.trim();
  const ageInput = document.querySelector("form input.age").value.trim();
  const pwInput = document.querySelector("form input.password").value;
  const confirmPwInput = document.querySelector(
    "form input.confirm_password"
  ).value;

  // 유효성 - 이름
  if (nameInput == "") {
    setText(nameText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else {
    setText(nameText, "멋진 이름이네요!", false);
  }
  // 유효성 - 이메일
  if (emailInput == "") {
    setText(emailText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else if (!emailInput.includes("@")) {
    setText(emailText, "올바른 이메일 형식이 아닙니다.", true);
    isValid = false;
  } else {
    setText(emailText, "올바른 이메일 형식입니다.", false);
  }
  // 유효성 - 나이
  if (ageInput == "") {
    setText(ageText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else if (isNaN(ageInput)) {
    setText(ageText, "숫자로만 입력해주세요.", true);
    isValid = false;
  } else if (ageInput < 0 || ageInput % 1 != 0) {
    setText(ageText, "올바른 나이를 입력해주세요.", true);
    isValid = false;
  } else if (ageInput < 19) {
    setText(ageText, "미성년자는 가입할 수 없습니다.", true);
    isValid = false;
  } else {
    setText(ageText, "올바른 나이 형식입니다.", false);
  }
  // 유효성 - 비밀번호
  if (pwInput == "") {
    setText(pwText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else if (!passwordPattern.test(pwInput)) {
    setText(pwText, "영어·숫자·특수문자 조합, 4자 이상, 12자 이하", true);
    isValid = false;
  } else {
    setText(pwText, "올바른 비밀번호 형식입니다.", false);
  }
  // 유효성 - 비밀번호 확인
  if (confirmPwInput != pwInput) {
    setText(confirmPwText, "비밀번호가 일치하지 않습니다.", true);
    isValid = false;
  } else {
    setText(confirmPwText, "비밀번호가 일치합니다.", false);
  }

  // 제출 & 모달
  if (isValid) {
    openModal();
  }
}

function openModal() {
  modalBG.style.display = "block";
  modalBox.style.display = "block";
}

document.querySelector("div.modal button").addEventListener("click", () => {
  modalBG.style.display = "none";
  modalBox.style.display = "none";
});
