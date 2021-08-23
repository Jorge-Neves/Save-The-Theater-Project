
 const letters = ["A","S","D","W"];
let chosenLetter;

function randomizeLetter() {
    return letters[Math.floor(Math.random()*letters.length)];
}

function showLetter(){
    chosenLetter = randomizeLetter();
    const image = new Image();
    image.src = `/Mini-game/images/${chosenLetter.toLowerCase()}.png`;
    context.drawImage(image, 100, 375, 50, 50);
}

function startMiniGame() {
    setInterval(()=>{
        context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        showLetter();
    },2500)
}

let lives=3;
let score = 0;


document.addEventListener("keydown", (e)=> {
    if ((e.key) === chosenLetter) {
            score += 150;
            console.log(score);
            console.log("Score adding up!");
    }
    else {
        lives -= 1;
        if (lives === 0 ) {
            const go = new Image();
            go.src = "/images/gameover.png";
            context.drawImage(go, 250,250, 100,50);
        }
    }
})
