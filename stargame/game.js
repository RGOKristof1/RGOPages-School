
let gameTime = 60;
let stars = []
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function endGame(state ) {

}

function catchStar(starID) {
    document.getElementById(starID).remove();

    const index = stars.indexOf(starID);
    if (index !== -1) {
        stars.splice(index, 1);
    }

    console.log("removed", starID);
    if (stars.length == 0) {
        endGame("win")
    }
}


function startTimer(time) {
  const interval = setInterval(() => {
    time--;
    document.getElementById("startButton").innerText = time

    if (time <= 0) {
      clearInterval(interval);
      endGame("lose")
    }
  }, 1000);
}

function moveStars(){
    for (let i = 0; i < stars.length; i++) {
        document.getElementById()
        
    }
}

function spawnStars(starCount) {
    for (let i = 0; i < starCount; i++) {
        let starID = `${i+1}id`
        let randomPosX = randomBetween(5,95)
        let randomPosY = randomBetween(5,95)
        document.getElementById("playground").innerHTML += `<div class="star" onClick="catchStar('${starID}')" id="${starID}" style="top: ${randomPosY}%; left: ${randomPosX}%;">🌕</div>`
        stars.push(starID)
    }
}
function startGame() {
    document.getElementById("startButton").disabled = true;
    startTimer(gameTime)
    spawnStars(10)
}