let myScore = 0;
let computerScore = 0;
const myScoreSpan = document.getElementById('my-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.scoreBoard');
const resultParagraph = document.querySelector('.result p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
function getComputerChoice(){
     const choices = ['r','p','s'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
}
function convertToWord(letter){
     if(letter === 'r'){
          return 'rock';
     }
     if(letter === 'p'){
          return 'paper';
     }
     return 'scissors';
}
function winner(myChoice,computerChoice){
     myScore++;
     myScoreSpan.innerHTML = myScore;
     computerScoreSpan.innerHTML = computerScore;
     const smallMyWord = "me".fontsize(3).sub();
     const smallComputerWord = "computer".fontsize(3).sub();
     const userChoice = document.getElementById(myChoice);
     resultParagraph.innerHTML = `${convertToWord(myChoice)}${smallMyWord} beats ${convertToWord(computerChoice)}${smallComputerWord}, you win!!`;
     userChoice.classList.add('green-glow');
     setTimeout(() => {
          userChoice.classList.remove('green-glow');
     },1000);
}
function lose(myChoice,computerChoice){
     computerScore++
     myScoreSpan.innerHTML = myScore;
     computerScoreSpan.innerHTML = computerScore;
     const smallMyWord = "me".fontsize(3).sub();
     const smallComputerWord = "computer".fontsize(3).sub();
     const userChoice = document.getElementById(myChoice);
     resultParagraph.innerHTML = `${convertToWord(myChoice)}${smallMyWord} lose to ${convertToWord(computerChoice)}${smallComputerWord}, you lost..`;
     userChoice.classList.add('red-glow');
     setTimeout(() => {
          userChoice.classList.remove('red-glow');
     },1000);
}
function draw(myChoice,computerChoice){
     const smallMyWord = "me".fontsize(3).sub();
     const smallComputerWord = "computer".fontsize(3).sub();
     const userChoice = document.getElementById(myChoice);
     resultParagraph.innerHTML = `${convertToWord(myChoice)}${smallMyWord} equals ${convertToWord(computerChoice)}${smallComputerWord}, its a tie`;
     userChoice.classList.add('gray-glow');
     setTimeout(() => {
          userChoice.classList.remove('gray-glow');
     },1000);
}
function game(myChoice){
     const computerChoice = getComputerChoice();
     switch(myChoice+computerChoice){
          case "rs":
          case "pr":
          case "sp":
               winner(myChoice,computerChoice);
               break;
          case "rp":
          case "ps":
          case "sr":
               lose(myChoice,computerChoice);
               break;
          case "rr":
          case "pp":
          case "ss":
               draw(myChoice,computerChoice);
               break;
     }
}
function main(){
     rock.addEventListener('click',() => {
          game('r');
     });
     paper.addEventListener('click',() => {
          game('p');
     });
     scissors.addEventListener('click',() => {
          game('s');
     });
}
main();