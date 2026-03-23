function display(toDisplay) {
  let output = document.getElementById("calc-output").textContent
  output = output + toDisplay;
  document.getElementById("calc-output").textContent = output
  localStorage.setItem("display","")
}
function clearOutput() {
  document.getElementById("calc-output").textContent = "";
}
function backspace() {
  let output = document.getElementById("calc-output").textContent
  output = output.slice(0, -1)
  document.getElementById("calc-output").textContent = output

}

function calculate() {
  let output = document.getElementById("calc-output").textContent
  document.getElementById("calc-output").textContent = eval(output)
}

function clicked(button) {
  switch (button) {
    case "+":
      display("+");
      break;
    case "-":
      display("-");
      break;
    case "*":
      display("*");
      break;
    case "/":
      display("/");
      break;
    case "c":
      clearOutput();
      break;
    case "Escape":
      clearOutput();
      break;
    case "1":
      display("1");
      break;
    case "2":
      display("2");
      break;
    case "3":
      display("3");
      break;
    case "4":
      display("4");
      break;
    case "5":
      display("5");
      break;
    case "6":
      display("6");
      break;
    case "7":
      display("7");
      break;
    case "8":
      display("8");
      break;
    case "9":
      display("9");
      break;
    case "0":
      display("0");
      break;
    case ".":
      display(".");
      break;
    case "=":
      calculate();
      break;
    case "Enter":
      calculate();
      break;
    case "del":
      backspace();
      break;
    case "Backspace":
      backspace();
      break;
  }
}
document.addEventListener("keydown", e => {
  clicked(e.key)
});