import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, db} from "/assets/modules/firebase.js"

const btnRegister = document.getElementById('btn-register');

function checkpassword (password, check){
  if(password != check) return alert('Las contraseñas no coinciden');
}

btnRegister.addEventListener("click", async (e) => {
  e.preventDefault();
  const name = document.getElementById('name-register').value;
  const lastname = document.getElementById('lastname-register').value;
  const email = document.getElementById('email-register').value;
  const password = document.getElementById('password-register').value;
  const checkpass = document.getElementById('password-check').value;

  checkpassword(password, checkpass);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential);

  } catch (error) {
    console.error(error);
  }
});