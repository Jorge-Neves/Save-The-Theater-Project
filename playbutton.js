
class Play {
    constructor(x,y, w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "./images/play-button-circled.png";
        this.image = img;
    }

    draw() {
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}

const playButton = new Play(250,250,50,50);
