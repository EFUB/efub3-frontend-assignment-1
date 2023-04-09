//select button event listener
const selectBox = document.getElementById("select-box");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const playerStatusEl = document.getElementById("status-result__player");
const computerStatusEl = document.getElementById("status-result__computer");
const playerSelectedImg = document.getElementById("player-selected-img");
let playerSelectedText = "";
const computerSelectedImg = document.getElementById("computer-selected-img");
let computerSelectedText = "";
const resetBtn = document.getElementById("reset");

let results = [];

const bgImage = ["selected-rock", "selected-scissors", "selected-paper"];

const selectedText = ["주먹", "가위", "보"];

const selectImage = () => {
  if (rockBtn.classList.contains("click")) {
    //주먹
    playerSelectedText = selectedText[0];
    playerSelectedImg.className = bgImage[0];
  } else if (
    //가위
    scissorsBtn.classList.contains("click")
  ) {
    playerSelectedText = selectedText[1];
    playerSelectedImg.className = bgImage[1];
  } else if (
    // 보
    paperBtn.classList.contains("click")
  ) {
    playerSelectedText = selectedText[2];
    playerSelectedImg.className = bgImage[2];
  } else {
    return;
  }
};

// 컴퓨터의 랜덤 선택
const getRandomComputerImage = () => {
  const randomNum = Math.floor(Math.random() * 3);
  computerSelectedImg.className = bgImage[randomNum];
  computerSelectedText = selectedText[randomNum];
};

// 상태 업데이트
const updateStatus = () => {
  if (
    // 인간 승
    (playerSelectedText === selectedText[0] &&
      computerSelectedText === selectedText[1]) ||
    (playerSelectedText === selectedText[1] &&
      computerSelectedText === selectedText[2]) ||
    (playerSelectedText === selectedText[2] &&
      computerSelectedText === selectedText[0])
  ) {
    const result = {
      playerSelect: playerSelectedText,
      player: "win",
      computerSelect: computerSelectedText,
      computer: "lose",
    };

    results.push(result);
    playerStatusEl.innerText++;
  } else if (
    // 컴퓨터 승
    (playerSelectedText === selectedText[0] &&
      computerSelectedText === selectedText[2]) ||
    (playerSelectedText === selectedText[1] &&
      computerSelectedText === selectedText[0]) ||
    (playerSelectedText === selectedText[2] &&
      computerSelectedText === selectedText[1])
  ) {
    const result = {
      playerSelect: playerSelectedText,
      player: "lose",
      computerSelect: computerSelectedText,
      computer: "win",
    };
    results.push(result);
    computerStatusEl.innerText++;
  } else {
    // 무승부
    results.push({
      playerSelect: playerSelectedText,
      player: "draw",
      computerSelect: computerSelectedText,
      computer: "draw",
    });
  }
};

// 리셋 버튼
const resetStatus = () => {
  playerStatusEl.innerText = 0;
  computerStatusEl.innerText = 0;
  playerSelectedImg.style.background = "";
  playerSelectedText = "";
  computerSelectedImg.style.background = "";
  computerSelectedText = "";
  results = [];
};

//select button event listener
selectBox.addEventListener("click", (e) => {
  computerSelectedImg.style.background = "";
  computerSelectedText.innerText = "";

  if (e.target === rockBtn) {
    rockBtn.classList.add("click");
    scissorsBtn.classList.remove("click");
    paperBtn.classList.remove("click");
  } else if (e.target === scissorsBtn) {
    rockBtn.classList.remove("click");
    scissorsBtn.classList.add("click");
    paperBtn.classList.remove("click");
  } else if (e.target === paperBtn) {
    rockBtn.classList.remove("click");
    scissorsBtn.classList.remove("click");
    paperBtn.classList.add("click");
  } else {
    return false;
  }

  selectImage();

  setTimeout(() => {
    getRandomComputerImage();
    updateStatus();
  }, 300);
});

//reset button
resetBtn.addEventListener("click", resetStatus);
resetStatus();
