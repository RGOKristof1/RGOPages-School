let gridSizeFr = 0


function generateGrid(gridSize) {
  gridSizeFr = gridSize
  document.getElementById("playGround").innerHTML = ""
  document.getElementById("playGround").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  for (let i = 0; i < gridSize; i++) {
    for (let i2 = 0; i2 < gridSize; i2++) {
      document.getElementById("playGround").innerHTML += `<div class="${i}r ${i2}c">${i}r ${i2}c</div>`
  }}
  document.getElementById("devtools").remove()
  refreshScreen()
}


function refreshScreen() {
  console.log(`last player position:${lastPlayerPosition[0]}r ${lastPlayerPosition[1]}c`)
  document.getElementsByClassName(`${lastPlayerPosition[0]}r ${lastPlayerPosition[1]}c`)[0].removeAttribute("id")

  console.log(`current player position:${playerPosition[0]}r ${playerPosition[1]}c`)
  document.getElementsByClassName(`${playerPosition[0]}r ${playerPosition[1]}c`)[0].setAttribute("id","player")
}

let playerPosition = [1,1]
let lastPlayerPosition = [0,0]
let playerAlive = true

function movePlayer(direction) {
  lastPlayerPosition = [playerPosition[0],playerPosition[1]]
  switch (direction) {
    case "up":
      playerPosition[0] -= 1
      break
    case "right":
      playerPosition[1] += 1
      break
    case "down":
      playerPosition[0] += 1
      break
    case "left":
      playerPosition[1] -= 1
      break
  }
  console.log("--------------------------------------------------------")
  console.log(`Moved the player ${direction} players position is ${playerPosition}`)
  refreshScreen()
}

document.addEventListener("keydown", (e) => {
  if (e.key == "w" || e.key == "ArrowUp") {
    if (playerPosition[0] == 0) {
    } else {
      movePlayer("up")
    }
  } else if (e.key == "d" || e.key == "ArrowRight") {
    if (playerPosition[1] == gridSizeFr-1) {
    } else {
      movePlayer("right")
    }
  } else if (e.key == "s" || e.key == "ArrowDown") {
    if (playerPosition[0] == gridSizeFr-1) {
    } else {
      movePlayer("down")
    }
  } else if (e.key == "a" || e.key == "ArrowLeft") {
    if (playerPosition[1] == 0) {
    } else {
      movePlayer("left")
    }
  }
})

function openJoy(){
      //<button id="up"></button>
      //<button id="left"></button>
      //<button id="right"></button>
      //<button id="down"></button>
}