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

const userComment = document.getElementById("user-comment")
const passComment = document.getElementById("pass-comment")

function buildValidation() {
  const userInput = document.getElementById("user").value
  const passInput = document.getElementById("pass").value

  const storedUsers = getStoredUsers()
  const user = storedUsers.find(u => u.userName === userInput || u.email === userInput)
  const userFound = !!user
  const passwordMatches = user && user.password === passInput

  return {
    userInput,
    passInput,
    userFound,
    passwordMatches
  }
}

function updateComments(validation) {
  if (validation.userInput.length === 0) {
    showComment(userComment, "Username/Email is required!")
  } else if (!validation.userFound) {
    showComment(userComment, "Username/Email is not found!")
  } else {
    hideComment(userComment)
  }

  if (validation.passInput.length === 0) {
    showComment(passComment, "Password is required!")
  } else if (!validation.passwordMatches) {
    showComment(passComment, "Wrong password!")
  } else {
    hideComment(passComment)
  }
}

function updateFormState() {
  const validation = buildValidation()
  updateComments(validation)

  if (validation.userFound && validation.passwordMatches) {
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

  if (!validation.userFound || !validation.passwordMatches) {
    return
  }

  const storedUsers = getStoredUsers()
  const user = storedUsers.find(u => u.userName === validation.userInput || u.email === validation.userInput)
  localStorage.setItem("currentlogedinuser", user.userName)
  window.location.href = "/account"
})