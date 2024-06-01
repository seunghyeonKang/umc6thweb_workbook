// 제출 완료 모달
const modalBG = document.querySelector("div.background");
const modalComponent = document.querySelector("div.modal");

// 유효성 검사
const formElement = document.querySelector("form#signup_form");
formElement.addEventListener("submit", validateForm);

// text 초기화
const nameText = document.querySelector("div.signup p.name");
const emailText = document.querySelector("div.signup p.email");
const ageText = document.querySelector("div.signup p.age");
const passwordText = document.querySelector("div.signup p.password");
const confirmPasswordText = document.querySelector(
  "div.signup p.confirm_password"
);

const passwordPattern =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&.,^#])[A-Za-z\d@$!%*?&.,^#]{4,12}$/;

function setText(element, message, isError) {
  element.textContent = message;
  if (isError) {
    element.classList.add("error");
  } else {
    element.classList.remove("error");
  }
}

function validateForm(event) {
  event.preventDefault();
  console.log("제출");

  // input 변수
  const name = document.querySelector("div.signup input.name").value.trim();
  const email = document.querySelector("div.signup input.email").value.trim();
  const age = document.querySelector("div.signup input.age").value.trim();
  const password = document.querySelector("div.signup input.password").value;
  const confirmPassword = document.querySelector(
    "div.signup input.confirm_password"
  ).value;

  let isValid = true;

  // 유효성 - 이름
  if (name === "") {
    setText(nameText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else {
    setText(nameText, "멋진 이름이네요!", false);
  }

  // 유효성 - 이메일
  if (email === "") {
    setText(emailText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else if (!email.includes("@")) {
    setText(emailText, "올바른 이메일 형식이 아닙니다.", true);
    isValid = false;
  } else {
    setText(emailText, "올바른 이메일 형식입니다.", false);
  }

  // 유효성 - 나이
  if (age === "") {
    setText(ageText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else if (isNaN(age)) {
    setText(ageText, "숫자로만 입력해주세요.", true);
    isValid = false;
  } else if (age < 0 || age % 1 !== 0) {
    setText(ageText, "나이를 입력해주세요.", true);
    isValid = false;
  } else if (age < 19) {
    setText(ageText, "미성년자는 가입할 수 없습니다.", true);
    isValid = false;
  } else {
    setText(ageText, "올바른 나이 형식입니다.", false);
  }

  // 유효성 - 비밀번호
  if (password === "") {
    setText(passwordText, "필수 입력 항목입니다!", true);
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    setText(
      passwordText,
      "영어·숫자·특수문자 조합, 4자 이상, 12자리 이하",
      true
    );
    isValid = false;
  } else {
    setText(passwordText, "올바른 비밀번호 형식입니다.", false);
  }

  // 유효성 - 비밀번호 확인
  if (confirmPassword === "" || confirmPassword !== password) {
    setText(confirmPasswordText, "비밀번호가 일치하지 않습니다.", true);
    isValid = false;
  } else {
    setText(confirmPasswordText, "비밀번호가 일치합니다.", false);
  }

  // 제출
  if (isValid) {
    showModal();
    console.log("제출 성공!");
  }
}

function showModal() {
  modalBG.style.display = "block";
  modalComponent.style.display = "block";
}

// 모달 닫기
document.querySelector("div.modal button").addEventListener("click", () => {
  modalBG.style.display = "none";
  modalComponent.style.display = "none";
});
