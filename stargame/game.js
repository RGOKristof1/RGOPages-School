
let gameTime = 0;
let stars = []
let timeEnded = false
let starsLeft = true
let timerStopped = false

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function catchStar(starID) {
    document.getElementById(starID).remove();

    const index = stars.indexOf(starID);
    if (index !== -1) {
        stars.splice(index, 1);
    }

    console.log("removed", starID);
    
    if (stars.length == 0) {
        starsLeft = false
    } else {
        starsLeft = true
    }
}

function endGame(){
    document.getElementById("io").disabled = false;
    document.getElementById("io").disabled = false;
}

function startTimer(time) {
    timeEnded = false
    timerStopped = false
    const interval = setInterval(() => {
    time--;
    document.getElementById("startButton").innerText = time

    if (time <= 0) {
      clearInterval(interval);
      timeEnded = true
    } else if (timerStopped) {
        clearInterval(interval);
        time = 0
        document.getElementById("startButton").innerText = "Start";
        document.getElementById("startButton").disabled = false;
        endGame()
    }
  }, 1000);
}

function moveStars(){
    for (let i = 0; i < stars.length; i++) {
        let randomPosX = randomBetween(5,95)
        let randomPosY = randomBetween(5,95)
        document.getElementById(`${stars[i]}`).style.top = `${randomPosY}%`
        document.getElementById(`${stars[i]}`).style.left = `${randomPosX}%`
    }
}

function spawnStars(starCount) {
    for (let i = 0; i < starCount; i++) {
        let starID = `${i+1}id`
        let starSkin = document.getElementById("io").value || "🌕"
        document.getElementById("playground").innerHTML += `<div class="star" onClick="catchStar('${starID}')" id="${starID}">${starSkin}</div>`
        stars.push(starID)
    }
    console.log(stars)
}

function stopTimer() {
    timerStopped = true
}


function startGame() {
    gameTime = 60;
    stars = []
    timeEnded = false
    timerStopped = false
    document.getElementById("startButton").disabled = true;
    document.getElementById("io").disabled = true;
    startTimer(gameTime)
    spawnStars(10)
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function gameLoop() {
        while (!timeEnded || !starsLeft) {
          moveStars();

          await wait(1000);
        }
        stopTimer()
      }
      
      gameLoop();
      
}