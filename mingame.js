const letters = ["A", "S", "D", "W"];
const left = ["I", "J", "K", "L"];
// add right hand side letters
let rLetter, lLetter, chosenLetter, score, counter, lives, levelOne, levelTwo, levelThree;

score = 0;

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


function startMiniGame() {

  miniGameInterval = setInterval(() => {
    showLetter();
    counter ++;
    if (counter >15) {
        clearInterval(miniGameInterval);
        context.clearRect(100, 375, 80, 80);
        context.clearRect(300, 375, 80, 80);
    }
  }, 1500);
return counter;
}

let leave = setInterval(checkGameOver, 20);

function checkGameOver(){
    if (lives<=0) {
        console.log('game over!');
        gameOver.style.display = "block";
        clearInterval(leave);
        return;
    } 
}


const gameOver = document.querySelector("#over-canvas");
lives =3;

document.addEventListener("keydown", (e) => {
    if (lLetter !== undefined && rLetter !== undefined) {
        if (e.key.toLowerCase() === rLetter.toLowerCase() || e.key.toLowerCase() === lLetter.toLowerCase()) {
            score += 150;
            console.log("score:", score);
           
          } else {
            lives -= 1;
            console.log(lives);
           /*  if (lives<=0) {
                gameOver.style.display = "block";
                return;
            } */
          }
    }
});
