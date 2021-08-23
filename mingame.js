
 const letters = ["A","S","D","W"];
let chosenLetter;

function randomizeLetter() {
    return letters[Math.floor(Math.random()*letters.length)];
}

function showLetter(){
    chosenLetter = randomizeLetter();
    const image = new Image();
    image.src = `/Mini-game/images/${chosenLetter.toLocaleLowerCase()}.png`;
    context.drawImage(image, 100, 375, 50, 50);
}

function startMiniGame() {
    setInterval(()=>{
        context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
        showLetter();
    },1500)
}

let lives=3;
let score = 0;

document.addEventListener("keydown", (e)=> {
    if (e.key.toLowerCase()=== chosenLetter.toLowerCase()) {
        score += 150;
    }
    else {
        lives -= 1;
        if (lives === 0 ) {
            alert("GAME OVER");
        }
    }
})
