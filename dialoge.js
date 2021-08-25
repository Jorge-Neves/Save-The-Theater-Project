
class Dialogue  {
    constructor(txt) {
        
        const img = new Image();
        img.src = "./images/full-box.png";
        this.image = img;
    }

    draw() {
        context.drawImage(this.image, 25, 313, 450, 147);
    }
}

const dialogue = new Dialogue();
let imgCounter = 1;
function firstDialogue() {
    if ( imgCounter >=5) {
        context.clearRect(25, 313,450, 147);
        return
    }
    else {
        context.clearRect(25, 313,450, 147);
        const image = new Image();
        image.src = `/Dialogues/D${imgCounter}.PNG`
        context.drawImage(image,25,313,450,147);
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
        imgCounter ++;
        firstDialogue(imgCounter);
    }
}
)