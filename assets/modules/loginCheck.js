const ContentDesing = document.querySelectorAll('.content');
const loggedOutLinks = document.querySelectorAll(".login-box");
const loggedInLinks = document.querySelectorAll(".logout");
const navBarLinks = document.querySelectorAll(".wrapper")
const Register = document.querySelectorAll(".register-box")

export const loginCheck = (user) => {
  if (user) {
    Register.forEach((link) => (link.style.display = "none"));
    navBarLinks.forEach((link) => (link.style.display = ""));
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
    ContentDesing.forEach((link) => (link.style.height = "90vh"));
  } else {
    Register.forEach((link) => (link.style.display = "none"));
    navBarLinks.forEach((link) => (link.style.display = "none"));
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    ContentDesing.forEach((link) => (link.style.height = "100vh"));
    loggedOutLinks.forEach((link) => (link.style.display = ""));
  }
};