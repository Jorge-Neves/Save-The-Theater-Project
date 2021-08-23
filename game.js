console.log("Game JS is connected!");

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const game = {


    clear: ()=> {
        context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    },
}


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

document.addEventListener(`keydown`, (e)=> {
    context.clearRect(girl.x, girl.y,girl.w, girl.h);

    if (inGate()) {
        startMiniGame();
    } else if (boy.contact(girl)) {
        dialogue.draw();
        girl.y += 5;
        girl.x += 5;
    } else {
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
    }

    girl.draw();  
});

function inGate() {
    if (girl.top()< 69 && girl.left()>200 && girl.right()<310) {
    console.log("in gate");
    game.clear();
    startMiniGame();
    //run game!
    }
}
