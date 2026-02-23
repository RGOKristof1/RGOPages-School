function generateGrid(gridSize) {
  document.getElementById("playGround").innerHTML = ""
  document.getElementById("playGround").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  for (let i = 0; i < gridSize**2; i++) {
          document.getElementById("playGround").innerHTML += `<div id="${i}"></div>`
      }
}
