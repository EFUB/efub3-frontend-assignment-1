const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const resultText = document.querySelector(".result-text");
const myScore = document.querySelector(".my-score");
const comScore = document.querySelector(".computer-score");
const comImg = document.querySelector(".computer-img");
const myImg = document.querySelector(".my-img");
const refresh = document.querySelector("i");

let my_score = 0;
let com_score = 0;

function getComChoice() {
  const choices = ["rock", "scissors", "paper"];
  const ran = Math.floor(Math.random() * 3);
  comImg.src = "img/" + choices[ran] + ".png";
  return choices[ran];
}

function win() {
  myScore.innerText = ++my_score; //전위 연산자를 사용하면 한 줄에 작성 가능!
  resultText.innerText = "이겼습니다^^!";
}
function lose() {
  comScore.innerText = ++com_score;
  resultText.innerText = "졌습니다ㅠㅠ!";
}
function draw() {
  resultText.innerText = "비겼습니다!";
}

function play(myChoice) {
  myImg.src = "img/" + myChoice + ".png";
  setTimeout(() => {
    const comChoice = getComChoice();
    switch (myChoice + comChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        win();
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        lose();
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        draw();
        break;
    }
  }, 300);
} /*사용자가 선택한 즉시 이미지가 변경되고 0.3초 기다린 후 컴퓨터가 선택해 이미지가 
변경이 되게 함으로써 사용자가 컴퓨터보다 먼저 선택을 하고 컴퓨터는 사용자의 선택 이후에 
뒤따라 변경된 것이 확실히 느껴도록 함.*/

function reset() {
  myScore.innerText = 0;
  comScore.innerText = 0;
  myScore.innerText - 0;
  resultText.innerText = "가위 바위 보!";
  myImg.src = "img/paper.png";
  comImg.src = "img/paper.png";
}
/*확실히 초기화 됐다는 느낌을 주기 위해 양측의 점수뿐만 아니라 상단의 결과 텍스트도 처음 제목으로
다시 세팅하고 이미지도 양측 다 동일한 paper로 세팅함 */

function main() {
  rock.addEventListener("click", () => play("rock"));

  scissors.addEventListener("click", () => play("scissors"));

  paper.addEventListener("click", () => play("paper"));

  refresh.addEventListener("click", reset);
}

main();
