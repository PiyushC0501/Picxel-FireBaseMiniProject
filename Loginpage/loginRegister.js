import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7dy5V_YNk4xozyRl33Lho5-OC_T3tA38",
  authDomain: "picxellogin.firebaseapp.com",
  databaseURL: "https://picxellogin-default-rtdb.firebaseio.com",
  projectId: "picxellogin",
  storageBucket: "picxellogin.appspot.com",
  messagingSenderId: "844071248944",
  appId: "1:844071248944:web:ca247179c38c75324d79f5"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
      messageDiv.style.opacity=0;
    },5000);
  }  

const signUp = document.getElementById('signUpButton');
signUp.addEventListener('click',(event)=>{
  event.preventDefault();

  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const name = document.getElementById('regName').value;

  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;

    showMessage('Account Created Successfully','signUpMessage');
    window.location.href='loginRegister.html';

  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  })
});


const signIn = document.getElementById('signInButton');
signIn.addEventListener('click',(event)=>{
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;

    showMessage('Logged in Successfully.','signInMessage');
    window.location.href='../mainpage/index.html';

  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;

    showMessage('Log in error..','signInMessage');
  })
});


