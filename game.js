console.log("Game JS is connected!");
let inside;

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
document.querySelector("#over-canvas").style.display = 'none';

const game = {

    clear: ()=> {
        context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    },
    
};
    



// function updateCanvas() {
//     girl.draw();
//     boy.draw();
//     if (boy.contact(girl)) {
//         dialogue.draw();
//     }
//     inGate();
// }

//game.start();

const girl = new Girl(50,400,50,100);
let talking = 0;


document.addEventListener(`keydown`, (e)=> {
    
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
        return;
    }

    context.clearRect(girl.x, girl.y,girl.w, girl.h);
    context.clearRect(boy.x, boy.y, boy.w, boy.h);
    boy.draw();
    
    if (inGate()) {
        context.clearRect(25, 313,450, 147);
        const image = new Image();
        image.src = "/Dialogues/S2.PNG"
        context.drawImage(image,25,313,450,147);

    } else if (boy.contact(girl)) {
        /* dialogue.draw(); */
        // fazr variavel a contar vezes que conversam
        // se zero vezes fisrt, 1 vez second, 2 vezes 3rd 
        switch(talking) {
            case 0: 
                firstDialogue();
                talking ++;
                        break;
            case 1: 
                secondDialogue();
                talking ++;
                        break;
            case 2: 
                thirdDialogue();
                talking ++;

                        break;
        }
        girl.y += 5;
        girl.x += 5;
        girl.draw();
        
    } else {
        context.clearRect(25, 313,450, 147);
        switch(e.key) {
            case "ArrowUp":
                    girl.moveUp();
                    break;
            case "ArrowDown":
                    girl.moveDown();
                    break;
            case "ArrowLeft":
                    girl.moveLeft();
                    break;
            case "ArrowRight":
                    girl.moveRight();
                    break;   
        }
        girl.draw();  
    }
});

function inGate() {
    if (girl.top()< 69 && girl.left()>200 && girl.right()<310) {
        inside = true
        return inside;
    }

    return inside =false;
}
let levelUp = 0;
document.addEventListener("keydown", (e) => {
    if(e.key =="x" && inside === true){

        game.clear();
        girl.y=400;
        girl.x=50;
        
        switch(levelUp) {
            case 0: 
                startMiniGame(1500);
                levelUp ++;
                        break;
            case 1: 
                startMiniGame(1000);
                levelUp ++;
                        break;
            case 2: 
                startMiniGame(500);
                levelUp ++;

                        break;
            case 3: 
                alert("youwin!")
                        break;

        }
        
    }
})

