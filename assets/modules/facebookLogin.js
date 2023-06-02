import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "/assets/modules/firebase.js";

const facebookButton = document.querySelector('#Facebook-auth');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("facebook sign in");
    
    alert("Has iniciado sesión con el correo:"+ credentials.user.email)

  } catch (error) {
    console.log(error);
  }

})