const rock=document.querySelector('.rock');
const scissors=document.querySelector('.scissors');
const paper=document.querySelector('.paper');
const resultText=document.querySelector('.result-text');
const myScore=document.querySelector('.my-score');
const comScore=document.querySelector('.computer-score');
const comImg=document.querySelector('.computer-img');
const myImg=document.querySelector('.my-img');
const refresh=document.querySelector('i');

let my_score=0;
let com_score=0;

function getComChoice(){
    const choices=['rock', 'scissors', 'paper'];
    const ran=Math.floor(Math.random() * 3);
    comImg.src=choices[ran]+".png";
    return choices[ran];
}

function win(myChoice, comChoice){
    my_score++;
    myScore.innerText=my_score;
    comScore.innerText=com_score;
    resultText.innerText='이겼습니다^^!';
}
function lose(myChoice, comChoice){
    com_score++;
    myScore.innerText=my_score;
    comScore.innerText=com_score;
    resultText.innerText='졌습니다ㅠㅠ!';
}
function draw(myChoice, comChoice){
    resultText.innerText='비겼습니다!';
}

function play(myChoice){
    myImg.src=myChoice+".png";
    const comChoice=getComChoice();
    
    switch(myChoice+comChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(myChoice, comChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(myChoice, comChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(myChoice, comChoice);
            break;
    }
}

function main(){
    rock.addEventListener('click',() =>play('rock'));
        
    scissors.addEventListener('click',() =>play('scissors'));
        
    paper.addEventListener('click',() =>play('paper'));
    
    refresh.addEventListener('click', function(){
        myScore.innerText=0;
        comScore.innerText=0;
        my_score=com_score=0;
    });
}

main();