const title = document.querySelector("h2")    
const buttons = document.getElementsByClassName("button");
const me = document.getElementById("me")
const computer = document.getElementById("computer")
const computerChoice = document.getElementById("computerChoice")



function computerPlay(){
  let choice = Math.random()
  if (choice <0.3) {
    computerChoice.innerText = "✊"
    choice = "rock"
  }
  else if (choice < 0.6){
    computerChoice.innerText = "✌"
    choice = "scissors"
  } 
  else {
    computerChoice.innerText = "🖐"
    choice = "paper"
  }
  return choice;
} 

function scissors(){
  const choice = computerPlay()
  const me_currentNum = parseInt(me.innerText)
  const c_currentNum = parseInt(computer.innerText)

  if (choice === "rock"){
    title.innerText = "짐"   
    computer.innerText = c_currentNum + 1
  } else if (choice === "paper"){
    title.innerText = "이김"
    me.innerText = me_currentNum + 1
  } else{
    window.alert("무승부")
  }
}

function rock(){
  const choice = computerPlay()
  const me_currentNum = parseInt(me.innerText)
  const c_currentNum = parseInt(computer.innerText)

  if (choice === "paper"){
    title.innerText = "짐"   
    computer.innerText = c_currentNum + 1
  } else if (choice === "scissors"){
    title.innerText = "이김"
    me.innerText = me_currentNum + 1
  } else{
    window.alert("무승부")
  }
}

function paper(){
  const choice = computerPlay()
  const me_currentNum = parseInt(me.innerText)
  const c_currentNum = parseInt(computer.innerText)

  if (choice === "scissors"){
    title.innerText = "짐"   
    computer.innerText = c_currentNum + 1
  } else if (choice === "rock"){
    title.innerText = "이김"
    me.innerText = me_currentNum + 1
  } else{
     window.alert("무승부")
  }
}



function resetBtn(){
  title.innerText = "나 : 컴퓨터"
  computerChoice.innerText = "Ready"
  me.innerText = "0"
  computer.innerText = "0"
}

