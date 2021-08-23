console.log("Game JS is connected!");

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let interval;
const game = {

    start: ()=>{ 
        interval = setInterval(()=> {
         updateCanvas();},10);
            
    },

    clear: ()=> {
        context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    },
}

function updateCanvas() {
    //dialogue.draw();
    girl.draw();
    boy.draw();
    if (boy.contact(girl)) {
        dialogue.draw();
    }
    inGate();
}


game.start();

function inGate() {
    if (girl.top()< 69 && girl.left()>221 && girl.right()<310) {
    console.log("in gate");
    
    //run game!
    }
}
