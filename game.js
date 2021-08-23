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
    girl.draw();
    boy.draw();
}


game.start();
