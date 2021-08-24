
 const letters = ["A","S","D","W"];
 // add right hand side letters
let chosenLetter;
let lives = 3;
let score;


function randomizeLetter() {
    return letters[Math.floor(Math.random()*letters.length)];
}

function showLetter(){
    context.clearRect(100,375,80,80);
    chosenLetter = randomizeLetter();
    const image = new Image();
    image.src = `/images/${chosenLetter.toLowerCase()}.png`;
    context.drawImage(image, 100, 375, 80, 80);
}

// para o right hand size context.drawImage(image, 400, 375, 80, 80);


function startMiniGame() {
    setInterval(()=>{
        showLetter();
    },1500);
    
}

document.addEventListener("keydown", (e)=> {
    switch(e.key) {
        case "A":
            return true;
        break;
        case "W":
            return true;
        break;
        case "S":
            return true;;
        break;
        case "D":
            return true;
        break;
        case "I":
            return true; 
        break;
        case "J":
            return true;
        break;
        case "K":
            return true;
        break;
        case "L":
            return true;
        break;
    }

    if ((e.key) ===true) {
            score +=150;
            console.log(score);  
    }
    else {
        lives -= 1;
    }
})
