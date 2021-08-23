

class Girl {
    constructor(x,y,w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "/images/MCmain.png";
        this.image = img;
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

const girl = new Girl(50,400,50,100);

document.addEventListener(`keydown`, (e)=> {
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
    context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    girl.draw();   
});

