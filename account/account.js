window.addEventListener('load', () => {
  const currentUser = localStorage.getItem("currentlogedinuser")

  if (!currentUser) {
    window.location.href = "/login"
    return
  }

  const storedUsers = JSON.parse(localStorage.getItem("students") || "[]")
  const user = storedUsers.find(u => u.userName === currentUser)

  if (!user) {
    alert("User not found")
    window.location.href = "/login"
    return
  }

  document.getElementById("username").value = user.userName
  document.getElementById("email").value = user.email
  document.getElementById("phone").value = user.phone
  document.getElementById("birth").value = user.birthDate
  document.getElementById("class").value = user.class
})

document.getElementById("logout-button").addEventListener("click", () => {
  localStorage.removeItem("currentlogedinuser")
  window.location.href = "/login"
})

document.getElementById("delete-account-button").addEventListener("click", () => {
  const currentUser = localStorage.getItem("currentlogedinuser")
  if (!currentUser) {
    window.location.href = "/login"
    return
  }

  const storedUsers = JSON.parse(localStorage.getItem("students") || "[]")
  const remainingUsers = storedUsers.filter(u => u.userName !== currentUser)
  localStorage.setItem("students", JSON.stringify(remainingUsers))
  localStorage.removeItem("currentlogedinuser")
  window.location.href = "/login"
})