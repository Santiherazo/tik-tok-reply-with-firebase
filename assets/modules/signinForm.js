import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "/assets/modules/firebase.js";

const signInForm = document.querySelector("#Email-auth");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["email"].value;
  const password = signInForm["password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // reset the form
    signInForm.reset();
    
  } catch (error) {
    console.error(error)
  }
});