function generateGrid(gridSize) {
  document.getElementById("playGround").innerHTML = ""
  document.getElementById("playGround").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  document.getElementById("playGround").style.width = `${(gridSize*2)-10}rem`
  document.getElementById("playGround").style.height = `${(gridSize*2)-10}rem`
  for (let i = 0; i < gridSize**2; i++) {
          const child = document.createElement("div")
          document.getElementById("playGround").appendChild(child)
      }
    
}