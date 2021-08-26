const letters = ["A", "S", "D", "W"];
const left = ["I", "J", "K", "L"];
// add right hand side letters
let rLetter, lLetter, chosenLetter, score, counter, lives;
score = 0;
let miniGameOn = false;
let gameIsOver = false;

function randomizeLetter(array) {
  return array[Math.floor(Math.random() * array.length)];
  
}

function showLetter() {
  context.clearRect(100, 375, 80, 80);
  context.clearRect(300, 375, 80, 80);
  rLetter = randomizeLetter(letters);
  lLetter = randomizeLetter(left);
  const imageR = new Image();
  const imageL = new Image();
  imageR.src = `/images/${rLetter.toLowerCase()}.png`;
  imageL.src = `/images/${lLetter.toLowerCase()}.png`;
  context.drawImage(imageR, 100, 375, 80, 80);
  context.drawImage(imageL, 300, 375, 80, 80);
}

// para o right hand size context.drawImage(image, 400, 375, 80, 80);

counter =0;

let miniGameInterval;
let letterPressed = false;
;
function startMiniGame(t) {
  miniGameOn = true
  lives =10000;

  miniGameInterval = setInterval(() => {
    showLetter();
    counter ++;
    if (!letterPressed) {
      lives -= 1;
      console.log(lives);
    }
    if (counter >15 || gameIsOver) {
        clearInterval(miniGameInterval);
        context.clearRect(100, 375, 80, 80);
        context.clearRect(300, 375, 80, 80);
        miniGameDone =true;
        miniGameOn = false;
    }
     /* checkGameOver();  */
  }, t);

  if (gameIsOver) {
    clearInterval(miniGameInterval);
    clearInterval(leave);
    return
  }

return counter = 0;
}

let leave = setInterval(checkGameOver, 20); 



 function checkGameOver(){
    if (lives<0 ) {
      
      const gameOver = new Image();
      gameOver.src = `/Dialogues/S4.PNG`;
      gameOver.addEventListener("load", () => {
          context.drawImage(gameOver,25,313,450,147);
    }) 
    return gameIsOver= true;
}  
 }





document.addEventListener("keydown", (e) => {
    letterPressed = true;
    if (miniGameOn){
    if (lLetter !== undefined && rLetter !== undefined) {
        if (e.key.toLowerCase() === rLetter.toLowerCase() || e.key.toLowerCase() === lLetter.toLowerCase()) {
            score += 150;
            console.log("score:", score);         
          } else {
            lives -= 1;
          
          }
    }
  }
    letterPressed = false;

    if (e.key === "Tab" && gameIsOver) {
      girl.x = 50;
      girl.y = 400;
      score = 0;
      lives =10;
      miniGameOn = false;
      gameIsOver = false;
      talking = 0;
      levelUp = 0;
      isFirstDialog = false;
      isSecondDialog = false;
      isThirdDialog = false;
      context.clearRect(0,0, 500, 500);
      girl.draw();
      boy.draw();
      
    }
});
