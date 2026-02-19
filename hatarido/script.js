document.getElementById("event-name").addEventListener("keyup", (e) => {
  if (document.getElementById("event-name").value != "") {
    document.getElementById("event-name").classList.add("event-name-focus")
    document.getElementById("time").classList.add("shown")
    document.getElementById("date").classList.add("shown")

  } else {
    document.getElementById("event-name").classList.remove("event-name-focus")
    document.getElementById("time").classList.remove("shown")
    document.getElementById("date").classList.remove("shown")
  }
});