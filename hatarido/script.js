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

elements = []
function generateUniqueID() {
  let uniqueID;
  let exists;

  while (true) {
    uniqueID = Math.floor(Math.random() * 100000);
    exists = false;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].eventId === uniqueID) {
        console.log("Már létezik a unique ID");
        exists = true;
        break; // kilépünk a FOR-ból
      }
    }

    if (exists) {
      continue; // újraindítja a WHILE-t
    }

    break; // ha nem létezett, kilépünk a WHILE-ból
  }

  return uniqueID;
}
function displayList() {
  
}
function addToList() {
  elements.push({
    eventId:generateUniqueID(),
    eventName:document.getElementById("event-name-input").value,
    eventDate:document.getElementById("event-date-input").value,
    eventTime:document.getElementById("event-time-input").value
  })
  console.log(elements)
  console.log()
  displayList()
}