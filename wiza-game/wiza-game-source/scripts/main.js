function generateGrid(gridSize) {
  document.getElementById("playGround").innerHTML = ""
  document.getElementById("playGround").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  for (let i = 0; i < gridSize; i++) {
    for (let i2 = 0; i2 < gridSize; i2++) {
      document.getElementById("playGround").innerHTML += `<div class="${i}r ${i2}c">${i}r ${i2}c</div>`
  }}
  refreshScreen()
}


let playerPosition = [0,0]
let lastPlayerPosition = [0,0]

function refreshScreen() {
  console.log(`last player position:${lastPlayerPosition[0]}r ${lastPlayerPosition[1]}c`)
  document.getElementsByClassName(`${lastPlayerPosition[0]}r ${lastPlayerPosition[1]}c`)[0].removeAttribute("id")

  console.log(`current player position:${playerPosition[0]}r ${playerPosition[1]}c`)
  document.getElementsByClassName(`${playerPosition[0]}r ${playerPosition[1]}c`)[0].setAttribute("id","player")
}


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
  switch (e.key) {
    case "w":
    case "ArrowUp":
      movePlayer("up")
      break
    case "d":
    case "ArrowRight":
      movePlayer("right")
      break
    case "s":
    case "ArrowDown":
      movePlayer("down")
      break
    case "a":
    case "ArrowLeft":
      movePlayer("left")
      break
  }
})

