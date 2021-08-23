const canvas = document.getElementById("Keyboard");
const context = canvas.getContext("2d");
console.log("JS is connected");

const letters = ["A", "S", "D", "W"];
let chosenLetter;

function randomizeLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function showLetter() {
    chosenLetter = randomizeLetter();
    const image = new Image();
    image.src = `/images/${chosenLetter.toLocaleLowerCase()}.png`;
    context.drawImage(image, 100, 100, 50, 50);

}


function startGame() {
    setInterval(() => {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        showLetter();
    }, 1500)
};

document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === chosenLetter.toLowerCase()) {
        alert("certo");
    } else {
        alert("errado");
    }
    

})

startGame()









