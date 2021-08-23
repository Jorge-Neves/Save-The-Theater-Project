

class Girl {
    constructor(x,y,w,h) {
        this.x =x;
        this.y =y;
        this.w = w;
        this.h =h;
      
        const img = new Image();
        img.src = "/images/create-a-pixel-art-avatar.png";
        this.image = img;
    }

    draw() {
        context.drawImage( this.image, this.x, this.y, this.w, this.h);
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

const girl = new Girl(50,450,100,100);

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

