function checkInput() {
  if (document.getElementById("event-name-input").value != "") {
    document.getElementById("event-name-input").classList.add("event-name-input-focus")
    document.getElementById("event-time-input").classList.add("shown")
    document.getElementById("event-date-input").classList.add("shown")

  } else {
    document.getElementById("event-name-input").classList.remove("event-name-input-focus")
    document.getElementById("event-time-input").classList.remove("shown")
    document.getElementById("event-date-input").classList.remove("shown")
  }
}

document.getElementById("event-name-input").addEventListener("keyup",checkInput);
document.getElementById("event-name-input").addEventListener("input",checkInput);
