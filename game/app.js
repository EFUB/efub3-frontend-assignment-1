const my_img = document.getElementById("my_img");
const computer_img = document.getElementById("computer_img");
const my_score = document.getElementById("my_score");
const computer_score = document.getElementById("computer_score");
const crown1 = document.getElementById("crown1");
const crown2 = document.getElementById("crown2");

const my_choice = {
  0: "./src/left_rock.png",
  1: "./src/left_scissors.png",
  2: "./src/left_paper.png",
};

const computer_choice = {
  0: "./src/right_rock.png",
  1: "./src/right_scissors.png",
  2: "./src/right_paper.png",
};

const handleClick = (e) => {
  // 가위바위보 이미지 보여주기
  let my_id = document.getElementById(e.getAttribute("id")).getAttribute("id");
  let computer_id = Math.floor(Math.random() * 3);

  my_img.src = `${my_choice[my_id]}`;
  computer_img.src = `${computer_choice[computer_id]}`;

  // 점수 계산
  let my_id_num = +my_id;
  let winner = Math.min(my_id_num, computer_id);

  if (my_id_num !== computer_id) {
    if (my_id_num + computer_id === 2) {
      winner = Math.max(my_id_num, computer_id);
    }
    winner === my_id_num ? my_score.innerText++ : computer_score.innerText++;
  }

  // 왕관 이미지로 승패 보여주기
  if (+my_score.innerText === +computer_score.innerText) {
    crown1.style.display = "none";
    crown2.style.display = "none";
  } else if (+my_score.innerText > +computer_score.innerText) {
    crown1.style.display = "block";
    crown2.style.display = "none";
  } else {
    crown1.style.display = "none";
    crown2.style.display = "block";
  }
};
