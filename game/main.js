const human = document.querySelector(".human .choice");
const computer = document.querySelector(".computer .choice");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const result = document.querySelector(".result");
const humanScore = document.querySelector(".score .human");
const computerScore = document.querySelector(".score .computer");
const reset = document.querySelector(".reset");

scissors.addEventListener("click", () => play("가위"));
rock.addEventListener("click", () => play("바위"));
paper.addEventListener("click", () => play("보"));

const play = (myChoice) => {
  human.innerText = myChoice;
  chooseComputer();
  judge();
};

reset.onclick = () => {
  human.innerText = "";
  computer.innerText = "";
  result.innerText = "버튼 하나를 누르세요.";
  computerScore.innerText = 0;
  humanScore.innerText = 0;
};

const chooseComputer = () => {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) computer.innerText = "가위";
  else if (num === 1) computer.innerText = "바위";
  else if (num === 2) computer.innerText = "보";
};

const judge = () => {
  if (human.innerText === computer.innerText) {
    result.innerText = "비겼습니다.";
  } else if (
    (human.innerText === "가위" && computer.innerText === "바위") ||
    (human.innerText === "바위" && computer.innerText === "보") ||
    (human.innerText === "보" && computer.innerText === "가위")
  ) {
    result.innerText = "컴퓨터가 이겼습니다.";
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  } else {
    result.innerText = "인간이 이겼습니다.";
    humanScore.innerText = parseInt(humanScore.innerText) + 1;
  }
};
