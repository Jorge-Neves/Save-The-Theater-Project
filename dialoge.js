
let imgCounter = 1;
function firstDialogue() {
   /*  debugger; */
        if ( imgCounter >5) {
            debugger;
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