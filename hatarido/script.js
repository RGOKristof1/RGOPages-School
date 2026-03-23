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

function valueReset() {
  document.getElementById("event-name-input").value = ""
  document.getElementById("event-time-input").value = ""
  document.getElementById("event-date-input").value = ""
  checkInput()
}
valueReset()

elements = JSON.parse(localStorage.getItem("eventsList")) || []
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
  document.getElementById("events").innerHTML = ""
  for (let i = 0; i < elements.length; i++) {
    document.getElementById("events").innerHTML += `<div class="event"><div class="event-name">${elements[i].eventName}</div><div class="event-date">${elements[i].eventDate}</div><div class="event-time">${elements[i].eventTime}</div><button onclick="deleteItem(${elements[i].eventId})">X</button></div>`
  }
  localStorage.setItem("eventsList",JSON.stringify(elements))
}
displayList()
function addToList() {
  if (document.getElementById("event-name-input").value == "rgo") {
    document.getElementById("event-name-input").value = "something"
    document.getElementById("event-time-input").value = "12:34"
    document.getElementById("event-date-input").value = "2000-12-04"
  }
  const uniqueId = generateUniqueID()
  const nameValue = document.getElementById("event-name-input").value
  const dateValue = document.getElementById("event-date-input").value
  const timeValue = document.getElementById("event-time-input").value

  if (nameValue != "" && dateValue != "" && timeValue != "") {
    elements.push({
      eventId:uniqueId,
      eventName:nameValue,
      eventDate:dateValue,
      eventTime:timeValue
    })
    displayList()
    valueReset()
  }
}
function deleteItem(uniqueId) {
  console.log("in delete")
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].eventId)
    console.log(uniqueId)
    if (elements[i].eventId == uniqueId) {
      console.log("element foundt")
      elements.splice(i,1)
    }
  }
  displayList()
}
 function removeAll() {
  elements = []
  displayList()
 }