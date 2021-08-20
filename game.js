console.log("Game JS is connected!");

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

class Avatar {
    constructor(x,y) {
        this.x =x;
        this.y =y;
        const img = new Image();
        img.src =`/images/create-a-pixel-art-avatar.png`;

        img.onload = () => {
            this.image =img;
            this.draw();
        }
    }

    draw() {
        context.drawImage(this.image,this.x,this.y, 150, 150);
    }

    moveUp () {
        this.y -= 10;
        console.log("moving up!");
    }

    moveDown() {
        this.y += 10;
    }

    moveLeft() {
        this.x -=10 ;
    }

    moveRight() {
        this.x +=10;
    }
    
}

const girl = new Avatar(250,250);
girl.draw();


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
