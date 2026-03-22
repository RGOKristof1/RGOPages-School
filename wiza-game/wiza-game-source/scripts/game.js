//Making these two global vars
let gridSize = 0
let timeToPlay = 0
function renderGame() {
  console.log("IN renderGame()")
  const difficulty = document.getElementById('difficultyInput').value
  const joyMode = document.getElementById('joyInput').checked
  
  //Clearing the whole page
  document.getElementById("body").innerHTML = ""

  //Replacing the page with the base game skeleton
  if (joyMode == true) {
    document.getElementById("body").innerHTML += '<div id="info-wrapper"><div><p id="score">15</p><p>Points</p></div><div><p id="time">48</p><p>Time</p></div></div><div class="playGround" id="playGround"></div><div id="joy"><button id="up" onclick="movePlayer(\'up\')"></button><button id="right" onclick="movePlayer(\'right\')"></button><button id="down" onclick="movePlayer(\'down\')"></button><button id="left" onclick="movePlayer(\'left\')"></button></div>'
  } else {
    document.getElementById("body").innerHTML += '<div id="info-wrapper"><div><p id="score">15</p><p>Points</p></div><div><p id="time">48</p><p>Time</p></div></div><div class="playGround" id="playGround"></div>'
  }

  //Difficulty settings time/gridsize
  gridSize = 1
  timeToPlay = 99
  switch(difficulty){
    case "1":
      gridSize = 5
      timeToPlay = 20
      break
    case "2":
      gridSize = 7
      timeToPlay = 15
      break
    case "3":
      gridSize = 7
      timeToPlay = 15
      break
    case "4":
      gridSize = 9
      timeToPlay = 30
      break
    case "5":
      gridSize = 13
      timeToPlay = 30
      break
  }
  document.getElementById("time").innerText = timeToPlay

  //Generating the grid where the game will be
  document.getElementById("playGround").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  for (let i = 0; i < gridSize; i++) {
    for (let i2 = 0; i2 < gridSize; i2++) {
      document.getElementById("playGround").innerHTML += `<div class="${i}r ${i2}c">${i}r ${i2}c</div>`
  }}
}

function startTimer() {
  const timer = setInterval(() => {
    document.getElementById("time").innerText = timeToPlay

    if (timeToPlay <= 0) {
      clearInterval(timer);
      console.log("Done!");
    }
    timeToPlay--;
  }, 1000);
  return "GAME END";
}

function startGame() {
  renderGame()
  console.log(startTimer())
}

/*
<div id="devtools">
  <input id="gridSizeInput" type="text" maxlength="2" style="width: 1.5rem;height: 1rem;font-size: .7rem;text-align: center;">
  <button onclick="generateGrid(document.getElementById('gridSizeInput').value)">G</button>
</div>
<div id="info-wrapper">
  <div><p id="score">15</p><p>Points</p></div>
  <div><p id="time">48</p><p>Time</p></div>
</div>
<div class="playGround" id="playGround"></div>
<div id="joy">
    <button id="up" onclick="movePlayer('up')"></button>
    <button id="right" onclick="movePlayer('right')"></button>
    <button id="down" onclick="movePlayer('down')"></button>
    <button id="left" onclick="movePlayer('left')"></button>
</div>
*/