import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, db } from "/assets/modules/firebase.js"

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    logout.style.display = 'none';
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
});

