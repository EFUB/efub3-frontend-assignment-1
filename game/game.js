const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computer = document.querySelector(".computer");
const user = document.querySelector(".user");
const reset = document.querySelector(".reset img");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");
const comResult = document.querySelector(".com-result");
const userResult = document.querySelector(".user-result");

let comAns;
let userAns;
let comScore = 0;
let userScore = 0;

function randomGame(userAns) {
    comAns = Math.floor(Math.random() * 3);
    comResult.innerText = gameResult(comAns);
    userResult.innerText = gameResult(userAns);
    if(comAns > userAns) {
        if(Math.abs(comAns - userAns) < 2)
            comWin();
        else
            userWin();
    }
    else if(comAns < userAns) {
        if(Math.abs(comAns - userAns) < 2)
            userWin();
        else
            comWin();
    }
    else {
        winner.innerText = "비겼습니다!";
    }
}

function comWin() {
    winner.innerText = "컴퓨터 승!";
    computer.innerText = ++comScore;
}
function userWin() {
    winner.innerText = "유저 승!";
    user.innerText = ++userScore;
}

function gameResult(ans) {
    if(ans === 0)
        return "바위";
    else if(ans === 1)
        return "보";
    else
        return "가위";
}

function resetGame() {
    computer.innerText = comScore = 0;
    user.innerText = userScore = 0;
    winner.innerText = "\u00a0";
    comResult.innerText = "\u00a0";
    userResult.innerText = "\u00a0";
}

rock.onclick = () => {
    userAns = parseInt(rock.id);
    randomGame(userAns);
}
paper.onclick = () => {
    userAns = parseInt(paper.id);
    randomGame(userAns);
}
scissors.onclick = () => {
    userAns = parseInt(scissors.id);
    randomGame(userAns);
}

reset.onclick = () => {
    resetGame();
}