
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
    imgCounter = 6;
    console.log('inside dialogue 2');
    if ( imgCounter >9) {
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
    imgCounter =10;
    if ( imgCounter >13) {
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
        firstDialogue(imgCounter);
    }
    else if(e.key.toLowerCase() == "y") {
        imgCounter ++;
        firstDialogue(imgCounter);
    }
    else if (e.key.toLowerCase() == "n"){
        imgCounter +=2;
        firstDialogue(imgCounter);
    }
}
)