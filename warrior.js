const game = () => {
     let mScore = 0;
     let cScore = 0;
     const startGame = () => {
          const introScreen = document.querySelector('.intro');
          const playButton = document.querySelector('.intro button');
          const match = document.querySelector('.match');
          playButton.addEventListener('click',() => {
               introScreen.classList.add('fadeOut');
               match.classList.add('fadeIn');
          });
     };
     const playMatch = () => {
          const option = document.querySelectorAll('.options button');
          const myHand = document.querySelector('.my-hand');
          const computerHand = document.querySelector('.computer-hand');
          const hand = document.querySelectorAll('img');
          hand.forEach(hands => {
               hands.addEventListener('animationend',function(){
                    hands.style.animation = '';
               });
          });
          const computerOption = ['rock','paper','scissors'];
          option.forEach(options => {
               options.addEventListener('click',function(){
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOption[computerNumber];
                    setTimeout(() => {
                         compareHands(this.textContent,computerChoice);
                         myHand.src = `./assets/${hands.textContent}.png`;
                         computerHand.src = `./assets/${computerChoice}.png`;
                    },2000);
                    myHand.style.animation = 'shakePlayer 2s ease';
                    computerHand.style.animation = 'shakePlayer 2s ease';
               });
          });
     };
     const updateScore = () => {
          const myScore = document.querySelector('.my-score p');
          const computerScore = document.querySelector('.computer-score p');
          myScore.textContent = mScore;
          computerScore.textContent = cScore;
     };
     const compareHands = (myChoice,computerChoice) => {
          const winner = document.querySelector('.winner');
          if(myChoice === computerChoice){
               winner.textContent = "It's a Draw";
               return;
          }
          if(myChoice === 'rock'){
               if(computerChoice === 'scissors'){
                    winner.textContent = 'I Wins';
                    mScore++;
                    updateScore();
                    return;
               }else{
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
               }
          }
          if(myChoice === 'paper'){
               if(computerChoice === 'scissors'){
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
               }else{
                    winner.textContent = 'I Wins';
                    mScore++;
                    updateScore();
                    return;
               }
          }
          if(myChoice === 'scissors'){
               if(computerChoice === 'rock'){
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
               }else{
                    winner.textContent = 'I Wins';
                    mScore++;
                    updateScore();
                    return;
               }
          }
     };
     startGame();
     playMatch();
};
game();