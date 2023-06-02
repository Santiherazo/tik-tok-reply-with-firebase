window.addEventListener('load', async (e) => {
    const loader = document.getElementById('loader');

    function actions (){
        loader.style.opacity = 0;
        loader.style.visibility = 'hidden';
        loader.remove();
    }

    setTimeout(actions, 5000);
});

const clickEvent = document.getElementById('register');
clickEvent.addEventListener('click', async (e) => {
    const login = document.getElementById('login-content');
    const register = document.getElementById('register-content');
    const media = document.getElementById('media-content');

    media.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'block';
    register.style.opacity = '1';
});

const showPassword = document.getElementById('showPassword');
showPassword.addEventListener('click', async(e) => {
    const password = document.getElementById('password-register');
    const icon = document.getElementById('icon')

    password.type = "text";
    icon.classList.remove('fa-solid','fa-eye');
    icon.classList.add('fa-solid' ,'fa-eye-slash');
    showPassword.id = "hidePassword";

    function hidePassword (){
    const hidePassword = document.getElementById('hidePassword');
    password.type = "password";
    icon.classList.remove('fa-solid' ,'fa-eye-slash');
    icon.classList.add('fa-solid','fa-eye');
    hidePassword.id = "showPassword";
    }

    setTimeout(hidePassword, 5000);
});

const showPasswordcheck = document.getElementById('showPasswordcheck');
showPasswordcheck.addEventListener('click', async(e) => {
    const passwordcheck = document.getElementById('password-check');
    const icon = document.getElementById('iconCheck')

    passwordcheck.type = "text";
    icon.classList.remove('fa-solid','fa-eye');
    icon.classList.add('fa-solid' ,'fa-eye-slash');
    showPasswordcheck.id = "hidePasswordcheck";

    function hidePasswordcheck (){
    const hidePassword = document.getElementById('hidePasswordcheck');
    passwordcheck.type = "password";
    icon.classList.remove('fa-solid' ,'fa-eye-slash');
    icon.classList.add('fa-solid','fa-eye');
    hidePassword.id = "showPasswordcheck";
    }

    setTimeout(hidePasswordcheck, 5000);
});

const clickEventback = document.getElementById('back');
clickEventback.addEventListener('click', async (e) => {
    const login = document.getElementById('login-content');
    const register = document.getElementById('register-content');
    const media = document.getElementById('media-content');

    media.style.display = 'none';
    login.style.display = '';
    register.style.display = 'none';
    register.style.opacity = '0';
});

const newsScreen = document.getElementById('noticias');
newsScreen.addEventListener('click', async (e) => {
    const media = document.getElementById('media');
    const news = document.getElementById('news');

    media.style.display = 'none';
    news.style.display = '';
});

const outScreen = document.getElementById('tendencias');
outScreen.addEventListener('click', async (e) => {
    const media = document.getElementById('media');
    const news = document.getElementById('news');

    media.style.display = '';
    news.style.display = 'none';
});

const profileBtn = document.getElementById('profile-btn');
profileBtn.addEventListener('click', async (e) => {
    const media = document.getElementById('media-content');
    const login = document.getElementById('login-content');
    const register = document.getElementById('register-content');
    const profile = document.getElementById('profile');
    const logout = document.getElementById('logout');
    const add = document.getElementById('add');


    media.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';
    profile.style.display = 'block';
    logout.style.display = 'block';
    add.style.display = 'none';
});

const home = document.getElementById('home');
home.addEventListener('click', async (e) => {
    const media = document.getElementById('media-content');
    const login = document.getElementById('login-content');
    const register = document.getElementById('register-content');
    const profile = document.getElementById('profile');
    const add = document.getElementById('add');

    media.style.display = '';
    login.style.display = 'none';
    register.style.display = 'none';
    profile.style.display = 'none';
    add.style.display = 'none';
});

const addNews = document.getElementById('add-news');
addNews.addEventListener('click', async (e) => {
    const media = document.getElementById('media-content');
    const login = document.getElementById('login-content');
    const register = document.getElementById('register-content');
    const profile = document.getElementById('profile');
    const add = document.getElementById('addNewscontent');

    media.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';
    profile.style.display = 'none';
    add.style.display = 'block';
});

const uploadsContent = document.getElementById('uploadsContent');
uploadsContent.addEventListener('click', async (e) => {
    const generalPanel = document.getElementById('general-panel');
    const addPanel = document.getElementById('add-panel');

    generalPanel.style.display = 'none';
    addPanel.style.display = 'block';
});

import { auth, db } from "../modules/firebase.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

function videoAleatorio(){
    let videos = ["uploads/video1.mp4", "uploads/video2.mp4", "uploads/video3.mp4", "uploads/video4.mp4"];

    let videoAleatorio =  videos[Math.floor(Math.random() * videos.length)];

    return videoAleatorio;
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('publish-title').value;
    const short = document.getElementById('shortDescription').value;
    const description = document.getElementById('description').value;
    const img = document.getElementById('url-img').value;
    const category = document.getElementById('publish-category').value;

    try {
        const docRef = await addDoc(collection(db, "news"), {
          title: title,
          short: short,
          description: description,
          img: img,
          author: '',
          category: category,
          outstanding: '',
          video: videoAleatorio()

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
});