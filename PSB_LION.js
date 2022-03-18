window.addEventListener("load", welcome);
const saluteBtn = document.querySelector(".login_button");
// const submitBtn = document.querySelector(".login_button");
// const cancel = document.querySelector(".cancelBtn");

function welcome() {
  alert("안녕하세요. 박성범입니다. 오늘 하루도 좋은 날 되세요 ^^");
}

function saluteLogin() {
  alert(
    "로그인 기능을 구현하고 싶었는데 어디서 에러가 발생했는지 보이지가 않네요 ㅠㅠ 꼭 수강하면서 부족한 점을 배우고 싶습니다!"
  );
}

// 로그인 공란 시 에러 메세지
// function loginError() {
//   const id = document.querySelector("#id_value");
//   const pw = document.querySelector("#pw_value");

//   if (id == "") {
//     alert("입력되지 않았습니다.");
//     fieldValue.focus();
//     return false;
//   } else if (pw == "") {
//     alert("입력되지 않았습니다.");
//     timeValue.focus();
//     return false;
//   }
// }

// 로그인 팝업 디자인 화면이 사라지는 기능
// submitBtn.addEventListener("click", loginError);

// function cancelMain() {
//   const main = document.querySelector(".mainpage");
//   main.style.display = none;
// }

// cancel.addEventListener("click", cancelMain);
saluteBtn.addEventListener("click", saluteLogin);
