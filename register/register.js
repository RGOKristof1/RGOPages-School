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
const phoneComment = document.getElementById("phone-comment")
const birthComment = document.getElementById("birth-comment")
const classComment = document.getElementById("class-comment")
const passComment = document.getElementById("pass-comment")
const passConfirmComment = document.getElementById("pass-confirm-comment")

const invalidUsernameChars = [" ", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "}", "[", "]", "|", "\\", "/", "?", "<", ">"]
const emailRegex = /^[^\s@]+@blathy\.info$/
const phoneRegex = /^(06|\+36)(20|30|50|70)\d{7}$/
const birthRegex = /^(2006|2007|2008|2009|2010|2011|2012)-\d{2}-\d{2}$/
const classRegex = /^\d{2}[A-Z]$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-_%!/$])[A-Za-z\d-_%!/$]{8,}$/


function buildValidation() {
  const usernameInput = document.getElementById("username").value
  const emailInput = document.getElementById("email").value
  const phoneInput = document.getElementById("phone").value
  const birthInput = document.getElementById("birth").value
  const classInput = document.getElementById("class").value
  const passInput = document.getElementById("pass").value
  const passConfirmInput = document.getElementById("pass-confirm").value

  const usernameFormatGood = usernameInput.length > 0 && usernameInput.length < 20 && !invalidUsernameChars.some((ch) => usernameInput.includes(ch))
  const storedUsers = getStoredUsers()
  const usernameDuplicate = usernameInput.length > 0 && storedUsers.some((user) => user.userName === usernameInput)
  const usernameGood = usernameFormatGood && !usernameDuplicate
  const emailGood = emailRegex.test(emailInput)
  const phoneGood = phoneRegex.test(phoneInput)
  const birthGood = birthRegex.test(birthInput)
  const classGood = classRegex.test(classInput)
  const passGood = passRegex.test(passInput)
  const passConfirmGood = passInput === passConfirmInput

  return {
    usernameInput,
    emailInput,
    phoneInput,
    birthInput,
    classInput,
    passInput,
    passConfirmInput,
    usernameFormatGood,
    usernameDuplicate,
    usernameGood,
    emailGood,
    phoneGood,
    birthGood,
    classGood,
    passGood,
    passConfirmGood
  }
}

function updateComments(validation) {
  if (validation.usernameInput.length === 0) {
    showComment(usernameComment, "Username is required!")
  } else if (!validation.usernameFormatGood) {
    showComment(usernameComment, "This username is not formatted right!")
  } else if (validation.usernameDuplicate) {
    showComment(usernameComment, "Username is taken!")
  } else {
    hideComment(usernameComment)
  }

  if (validation.emailInput.length === 0) {
    showComment(emailComment, "Email is required!")
  } else if (!validation.emailGood) {
    showComment(emailComment, "Email must end with @blathy.info")
  } else {
    hideComment(emailComment)
  }

  if (validation.phoneInput.length === 0) {
    showComment(phoneComment, "Phone number is required!")
  } else if (!validation.phoneGood) {
    showComment(phoneComment, "Only Hungarian phone numbers allowed")
  } else {
    hideComment(phoneComment)
  }

  if (validation.birthInput.length === 0) {
    showComment(birthComment, "Birth date is required!")
  } else if (!validation.birthGood) {
    showComment(birthComment, "Date must be between 2006-2012")
  } else {
    hideComment(birthComment)
  }

  if (validation.classInput.length === 0) {
    showComment(classComment, "Class is required!")
  } else if (!validation.classGood) {
    showComment(classComment, "Class must be 2 digits and 1 uppercase letter")
  } else {
    hideComment(classComment)
  }

  if (validation.passInput.length === 0) {
    showComment(passComment, "Password is required!")
  } else if (!validation.passGood) {
    showComment(passComment, "Password must be 8+ chars, with lower, upper and - _ % ! / $")
  } else {
    hideComment(passComment)
  }

  if (validation.passConfirmInput.length === 0) {
    showComment(passConfirmComment, "Please confirm your password!")
  } else if (!validation.passConfirmGood) {
    showComment(passConfirmComment, "Passwords do not match!")
  } else {
    hideComment(passConfirmComment)
  }
}

function updateFormState() {
  const validation = buildValidation()
  updateComments(validation)

  if (validation.usernameGood && validation.emailGood && validation.phoneGood && validation.birthGood && validation.classGood && validation.passGood && validation.passConfirmGood) {
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

  if (!validation.usernameGood || !validation.emailGood || !validation.phoneGood || !validation.birthGood || !validation.classGood || !validation.passGood || !validation.passConfirmGood) {
    return
  }

  const storedUsers = getStoredUsers()
  if (validation.usernameDuplicate) {
    showComment(usernameComment, "Username is taken!")
    return
  }

  const newStudent = {
    userName: validation.usernameInput,
    password: validation.passInput,
    birthDate: validation.birthInput,
    class: validation.classInput,
    email: validation.emailInput,
    phone: validation.phoneInput
  }

  storedUsers.push(newStudent)
  localStorage.setItem("students", JSON.stringify(storedUsers))
  localStorage.setItem("currentlogedinuser", validation.usernameInput)

  alert("Sikeres regisztráció!")
})

document.getElementById("lang-button").addEventListener("click", () => {
  const storedUsers = getStoredUsers()
  console.log("All saved users:", storedUsers)
})

document.getElementById("light-mode-button").addEventListener("click", () => {
  localStorage.clear()
  alert("All localStorage data deleted!")
})