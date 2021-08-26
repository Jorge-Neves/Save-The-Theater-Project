
let imgCounter = 1;
function firstDialogue() {
   /*  debugger; */
        if ( imgCounter >5) {
            context.clearRect(25, 313,450, 147);
            return
        }
        else {
            const image = new Image();
            image.src = `/Dialogues/D${imgCounter}.PNG`
            image.addEventListener("load", () => {
                context.drawImage(image,25,313,450,147);
            })
        }

}

function secondDialogue() {
    console.log('inside dialogue 2');
    if ( imgCounter > 10) {
        context.clearRect(25, 313,450, 147);
        return
    }
    else {
        const image = new Image();
            image.src = `/Dialogues/D${imgCounter}.PNG`
            image.addEventListener("load", () => {
                context.drawImage(image,25,313,450,147);
            })
    }
}

function thirdDialogue() {
    if ( imgCounter >15) {
        context.clearRect(25, 313,450, 147);
        return
    }
    else {
        const image = new Image();
        image.src = `/Dialogues/D${imgCounter}.PNG`
        image.addEventListener("load", () => {
            context.drawImage(image,25,313,450,147);
        })
    }
}

document.addEventListener(`keydown`, (e)=> {
    if (e.key === "Tab" && gameIsOver) {
        girl.x = 50;
        girl.y = 400;
        score = 0;
        lives =10;
        miniGameOn = false;
        gameIsOver = false;
        talking = 0;
        levelUp = 0;
        isFirstDialog = false;
        isSecondDialog = false;
        isThirdDialog = false;
        context.clearRect(0,0, 500, 500);
        girl.draw();
        boy.draw();
        
      }
});


document.addEventListener(`keydown`, (e) => {
    if ( (e.key).toLowerCase() =="n" && imgCounter === 3 ) {
        imgCounter+=2;
        firstDialogue(imgCounter);
        gameisOver =true;
        const gOver = new Image();
        gOver.src = `/Dialogues/S4.PNG`
        gOver.addEventListener("load", () => {
                setTimeout(()=> {
                context.drawImage(gOver,25,313,450,147);
        },2500)   
      })
    }
    if ((e.key).toLowerCase() =="n" && imgCounter === 8 ) {
        imgCounter+=2;
        secondDialogue(imgCounter);
        gameisOver =true;
        const gOver = new Image();
      gOver.src = `/Dialogues/S4.PNG`;
      gOver.addEventListener("load", () => {
            setTimeout(()=> {
            context.drawImage(gOver,25,313,450,147);
        },1500)   
      })
       
        
    }
    if ((e.key).toLowerCase() =="n" && imgCounter === 13) {
        imgCounter+=2;
        thirdDialogue(imgCounter);
        gameisOver =true;
        const gOver = new Image();
        gOver.src = `/Dialogues/S4.PNG`
        gOver.addEventListener("load", () => {
                setTimeout(()=> {
                context.drawImage(gOver,25,313,450,147);
        },1500)   
      })
        
    }

    
});

document.addEventListener(`keydown`, (e) => {
    
    if (e.key == "Enter") {
        imgCounter ++;
        if (imgCounter <= 6 && isFirstDialog) {
            firstDialogue(imgCounter);
        } else if (imgCounter >= 7 && imgCounter < 11 && isSecondDialog) {
            secondDialogue(imgCounter);
        } else if (imgCounter >=12 && imgCounter < 16 && isThirdDialog) {
            thirdDialogue(imgCounter);
            
        }
    }
}
)