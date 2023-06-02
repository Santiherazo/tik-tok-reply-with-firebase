import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBNYaWlMJIg5w7b6QPh-my5nUa8NaH9ut4",
  authDomain: "news-app-42878.firebaseapp.com",
  projectId: "news-app-42878",
  storageBucket: "news-app-42878.appspot.com",
  messagingSenderId: "869836353710",
  appId: "1:869836353710:web:d23ef5014a4657636bbd3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)