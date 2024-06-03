// LOGIN App📱
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const welcomeMessageDiv = document.getElementById("welcomeMessage");
const usernameDisplaySpan = document.getElementById("usernameDisplay");
const logoutButton = document.getElementById("logoutButton");

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Lax`;
}

function displayWelcomeMessage(username) {
  welcomeMessageDiv.classList.toggle("hidden");
  usernameDisplaySpan.textContent = username;
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  setCookie("username", username, 7);
  displayWelcomeMessage(username);
  alert("LOGIN OK!");
});

window.addEventListener("load", () => {
  const username = getCookie("username");
  if (username) {
    displayWelcomeMessage(username);
  }
});

logoutButton.addEventListener("click", () => {
  deleteCookie("username");
  alert("LOGOUT!");
  welcomeMessageDiv.classList.toggle("hidden");
});
