function continueUnlock() {
  document.getElementById("continue-button").classList.remove("continue-disabled")
}
function continueLock() {
  document.getElementById("continue-button").classList.add("continue-disabled")
}

function showComment(commentEl, text) {
  commentEl.textContent = text
  commentEl.classList.add("comment-show")
}

function hideComment(commentEl) {
  commentEl.classList.remove("comment-show")
}

function getStoredUsers() {
  return JSON.parse(localStorage.getItem("students") || "[]")
}

const usernameComment = document.getElementById("username-comment")
const emailComment = document.getElementById("email-comment")
const newPassComment = document.getElementById("new-pass-comment")
const newPassConfirmComment = document.getElementById("new-pass-confirm-comment")

const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-_%!/$])[A-Za-z\d-_%!/$]{8,}$/

function buildValidation() {
  const usernameInput = document.getElementById("username").value
  const emailInput = document.getElementById("email").value
  const newPassInput = document.getElementById("new-pass").value
  const newPassConfirmInput = document.getElementById("new-pass-confirm").value

  const storedUsers = getStoredUsers()
  const user = storedUsers.find((user) => user.userName === usernameInput)
  const usernameExists = !!user
  const emailMatches = user && user.email === emailInput
  const newPassGood = passRegex.test(newPassInput)
  const newPassConfirmGood = newPassInput === newPassConfirmInput

  return {
    usernameInput,
    emailInput,
    newPassInput,
    newPassConfirmInput,
    usernameExists,
    emailMatches,
    newPassGood,
    newPassConfirmGood
  }
}

function updateComments(validation) {
  if (validation.usernameInput.length === 0) {
    showComment(usernameComment, "Username is required!")
  } else if (!validation.usernameExists) {
    showComment(usernameComment, "Username is not registered!")
  } else {
    hideComment(usernameComment)
  }

  if (validation.emailInput.length === 0) {
    showComment(emailComment, "Email is required!")
  } else if (!validation.emailMatches) {
    showComment(emailComment, "Email is not matching the username!")
  } else {
    hideComment(emailComment)
  }

  if (validation.newPassInput.length === 0) {
    showComment(newPassComment, "New password is required!")
  } else if (!validation.newPassGood) {
    showComment(newPassComment, "Password must be 8+ chars, with lower, upper and - _ % ! / $")
  } else {
    hideComment(newPassComment)
  }

  if (validation.newPassConfirmInput.length === 0) {
    showComment(newPassConfirmComment, "Please confirm your new password!")
  } else if (!validation.newPassConfirmGood) {
    showComment(newPassConfirmComment, "Passwords do not match!")
  } else {
    hideComment(newPassConfirmComment)
  }
}

function updateFormState() {
  const validation = buildValidation()
  updateComments(validation)

  if (validation.usernameExists && validation.emailMatches && validation.newPassGood && validation.newPassConfirmGood) {
    continueUnlock()
  } else {
    continueLock()
  }
}

document.addEventListener("keyup", () => {
  updateFormState()
})

document.getElementById("continue-button").addEventListener("click", () => {
  const validation = buildValidation()
  updateComments(validation)

  if (!validation.usernameExists || !validation.emailMatches || !validation.newPassGood || !validation.newPassConfirmGood) {
    return
  }

  const storedUsers = getStoredUsers()
  const userIndex = storedUsers.findIndex((user) => user.userName === validation.usernameInput)
  if (userIndex !== -1) {
    storedUsers[userIndex].password = validation.newPassInput
    localStorage.setItem("students", JSON.stringify(storedUsers))
    alert("Jelszó sikeresen megváltoztatva!")
  } else {
    alert("Hiba történt a jelszó megváltoztatásakor.")
  }
})