

class Girl {
    constructor(x,y,w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "./images/MCMain.png";
       
        img.addEventListener("load", () => {
            this.image = img;
            this.draw();
        })
    }

    draw() {
        context.drawImage( this.image, this.x, this.y, this.w, this.h);
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

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 5;
    }

    moveRight() {
        this.x += 5;
    }
    
    moveLeft() {
        this.x -= 5;
    }

}



