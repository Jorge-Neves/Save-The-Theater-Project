
console.log("Game JS is connected!");
let inside;

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
document.querySelector("#over-canvas").style.display = 'none';

const bgMusic = new Audio("/music/Animal Crossing Gamecube Full Theme Song (High Quality).mp3");



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
let isFirstDialog = false;
let isSecondDialog = false;
let isThirdDialog = false;




const firstScreen = new Image();
firstScreen.src = `/Dialogues/S0.PNG`;
firstScreen.addEventListener("load", () => {
    context.drawImage(firstScreen,25,200,450,147);
});

document.addEventListener(`keydown`, (e)=> {
    setTimeout((bgMusic.play()), 1000);
    
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
        return;
    }
    context.clearRect(0,0, 500,500);
    context.clearRect(girl.x, girl.y,girl.w, girl.h);

    context.clearRect(boy.x, boy.y, boy.w, boy.h);
    boy.draw();
    
    if (inGate()) {
        if (isFirstDialog && talking ===1) {
            context.clearRect(25, 313,450, 147);
            const image = new Image();
            image.src = "/Dialogues/S2.PNG"
            context.drawImage(image,25,313,450,147);
        }
        else if (isSecondDialog && talking ===2) {
            context.clearRect(25, 313,450, 147);
            const image = new Image();
            image.src = "/Dialogues/S2.PNG"
            context.drawImage(image,25,313,450,147);
        }
        else if (isThirdDialog && talking ===3) {

            context.clearRect(25, 313,450, 147);
            const image = new Image();
            image.src = "/Dialogues/S2.PNG"
            context.drawImage(image,25,313,450,147);
        }
        else {
            const order = new Image();
            order.src = `/Dialogues/talk.PNG`;
            order.addEventListener("load", () => {
                context.drawImage(order,25,200,450,147);
                    });
                    girl.y=400;
                    girl.x=50;
                   setTimeout(()=>{girl.draw();
                    boy.draw();},2000) ;
                    
        }
        
        

    } else if (boy.contact(girl)) {
        context.clearRect(25, 313,450, 147);
        const image1 = new Image();
        image1.src = "/Dialogues/S3.PNG"
        context.drawImage(image1,25,313,450,147);
        
        
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

let miniGameDone = false;


document.addEventListener("keydown", (e) => {
    if(e.key =="x" && inside === true){

        game.clear();
        girl.y=400;
        girl.x=50;
        switch(levelUp) {
        
            case 0: 
                const level1 = new Image();
                level1.src = `/images/Level_1_button_pre_trans-removebg-preview.png`;
                level1.addEventListener("load", () => {
                context.drawImage(level1,150,10,170,50);
                }); 
                startMiniGame(1500);
                levelUp ++;
                         
                        break;
            case 1: 
                const level2 = new Image();
                level2.src = `/images/Level_2_button_pre_trans-removebg-preview.png`;
                level2.addEventListener("load", () => {
                context.drawImage(level2,150,10,170,50);
                }); 
                startMiniGame(1000);     
                levelUp ++;
                        break;
            case 2: 
            const level3 = new Image();
            level3.src = `/images/level_3_button_pre_trans-removebg-preview.png`;
            level3.addEventListener("load", () => {
                context.drawImage(level3,150,10,170,50);
                });
                startMiniGame(500);
                levelUp ++;
                if (miniGameDone)
        {  
            
            levelDone.addEventListener("load", () => {
                context.drawImage(levelDone,25,200,450,147);
                });
        }

                        break;
            case 3: 
            const win = new Image();
            win.src = `/Dialogues/end.PNG`;
            win.addEventListener("load", () => {
                context.drawImage(win,25,200,450,147);
                });
                        break;

        }
        
    }
})

document.addEventListener(`keydown`, (e)=> {
    if (e.key == " " && boy.contact(girl)) {
        switch(talking) {
            case 0: 
                isFirstDialog = true;
                firstDialogue();
                talking ++;
                
                        break;
            case 1: 
            console.log("second dialogue")
            isSecondDialog = true;
            imgCounter++;
            secondDialogue();
            context.clearRect(25, 313,450, 147)
            talking ++;
                
               
                        break;
            case 2: 
            isThirdDialog = true;
                imgCounter++;
                thirdDialogue();
                context.clearRect(25, 313,450, 147)
                talking ++;
               

                        break;
        }
        girl.y += 5;
        girl.x += 5;
        girl.draw();
        
    }
})