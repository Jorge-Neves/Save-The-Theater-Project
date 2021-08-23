
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