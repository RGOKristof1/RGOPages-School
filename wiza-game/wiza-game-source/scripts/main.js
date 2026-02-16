function generateGrid() {
    const gridSize = (document.getElementById("gridSize").value)**2
    console.log("Grid size:"+gridSize+"X"+gridSize)
    console.log(Math.sqrt(gridSize))
    if (gridSize < 9 || Math.sqrt(gridSize) != parseInt(Math.sqrt(gridSize))) {
        return
    }
    for (let i = 0; i < gridSize; i++) {
        const child = document.createElement("div")
        document.getElementById("playGround").appendChild(child)
    }
}