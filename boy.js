class Npc {
    constructor(x,y, w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "./images/avatarboy.png";
        this.image = img;
    }

    draw() {
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y+this.h;
    }

    left() {
        return this.x;
    }

    right() {
        return this.x+this.w;
    }

    
}

const boy = new Npc(50,50, 100,100);

