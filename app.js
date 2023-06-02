import { onAuthStateChanged, getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs, collection, query, where} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from "./assets/modules/firebase.js"
import { loginCheck } from "./assets/modules/loginCheck.js"


import './assets/modules/signinForm.js';
import './assets/modules/googleLogin.js';
import './assets/modules/facebookLogin.js';
import './assets/modules/logout.js';
import './assets/modules/signupForm.js';
import {loadData} from'./assets/modules/LoadDataout.js';
import {loadData2} from './assets/modules/loadDatanews.js';
import {loadProfile} from './assets/modules/loadProfile.js';


// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    loadProfile(user);
      try {
      const q = query(collection(db, "news"), where("outstanding", "==", "yes"));
      const querySnapshot = await getDocs(q);
      loadData(querySnapshot.docs);

      const querySnapshot2 = await getDocs(collection(db, "news"));
      loadData2(querySnapshot2.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    loginCheck(user);
    loadData([]);
    loadProfile([]);
  }
});
