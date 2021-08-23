
class Silhouette {
    const(x,y,w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "/images/MCmain.png";
        this.image = img;
    }

    draw() {
        context.drawImage( this.image, this.x, this.y, this.w, this.h);
    }
}

const silhouette = new Silhouette(200,250,100,100);
 
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

function startGame() {
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


function minGame() {
    startGame();
}
