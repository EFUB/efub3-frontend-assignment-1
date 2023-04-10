const $fightBtn = document.querySelector("#submitBtn");
const $aiImg = document.querySelectorAll(".aiImg");
const $userImg = document.querySelectorAll(".userimg");
const $choiceOptions = document.querySelector(".choiceContainer");
const $result = document.querySelector("#result");
let $userScore = document.querySelector("#userScore");
let $aiScore = document.querySelector("#AiScore");
let userChoice;
//1. 가위바위보 버튼 클릭시 이벤트
$choiceOptions.childNodes.forEach(function (choice) {
  choice.addEventListener("click", function () {
    //유저가 선택한 버튼의 value값이 userChoice
    userChoice = this.value;
    $aiImg.forEach((img) => (img.style.display = "none"));
    //유저가 선택한 이미지 그림보여주기
    $userImg[0].style.display = userChoice === "scissors" ? "block" : "none";
    $userImg[1].style.display = userChoice === "rock" ? "block" : "none";
    $userImg[2].style.display = userChoice === "paper" ? "block" : "none";
  });
});
//2. 승부버튼을 누르면 유저 선택이 저장된다. 선택한게 없으면 경고 알림창이 뜬다.
$fightBtn.addEventListener("click", saveChoice);
function saveChoice() {
  if (userChoice === ("" || undefined)) return alert("하나를 선택하세요!");
  randomChoice();
}
//3. 컴퓨터 랜덤 초이스, 랜덤돌리기 기능
function randomChoice() {
  const optionsArr = ["rock", "scissors", "paper"];
  //random돌리기
  const index = Math.floor(Math.random() * optionsArr.length);
  aiChoice = optionsArr[index];
  //aiChoice value에 따라 가위바위보 그림 보여주기
  $aiImg[0].style.display = aiChoice === "scissors" ? "block" : "none";
  $aiImg[1].style.display = aiChoice === "paper" ? "block" : "none";
  $aiImg[2].style.display = aiChoice === "rock" ? "block" : "none";
  //판정 함수 실행
  판정(userChoice, aiChoice);
}
//4. 판정 함수 실행
function 판정(userChoice, aiChoice) {
  let answer; //승부결과 저장할 변수
  if (userChoice === aiChoice) {
    answer = "무승부네요! 한판 더 해볼까요?";
  }
  //유저의 패가 없거나 undefined일 때 return 문 반환
  else if (userChoice === "" || userChoice === undefined) {
    return alert("하나를 선택해주세요!");
  } else if (
    (userChoice === "scissors" && aiChoice === "paper") ||
    (userChoice === "rock" && aiChoice === "scissors") ||
    (userChoice === "paper" && aiChoice === "rock")
  ) {
    answer = "축하합니다!! 당신이 승리하셨습니다!!";
  } else {
    answer = "아쉽지만..이번판은 패배!";
  }
  $result.textContent = answer;
  //5. 점수판에 점수올리는 함수 실행
  return 점수올리기(answer);
}
//5. 점수판에 점수 올리기 함수
function 점수올리기(answer) {
  //올라간 새로운 점수를 미리 정의
  let newUserScore = parseInt($userScore.innerText) + 1;
  let newAiScore = parseInt($aiScore.innerText) + 1;
  userChoice = "";
  aiChoice = "";
  if (answer === "무승부네요! 한판 더 해볼까요?") return 0;
  if (answer === "축하합니다!! 당신이 승리하셨습니다!!")
    return ($userScore.innerText = newUserScore);
  return ($aiScore.innerText = newAiScore);
}
//리셋버튼 클릭시 실행
$resetBtn = document.querySelector("#resetBtn");
$resetBtn.addEventListener("click", function () {
  /*리셋누르면 ai의 이미지 사라짐! */
  $aiImg.forEach((img) => (img.style.display = "none"));
  $userScore.innerText = 0;
  $aiScore.innerText = 0;
});
