class GameOver {
    constructor(x,y,w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "/images/gameover.png";
       
    }

    draw() {
        context.drawImage( this.image, this.x, this.y, this.w, this.h);
    }
}

const gameOver = new GameOver(250,250,100,50);