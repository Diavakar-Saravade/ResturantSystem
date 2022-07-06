
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js'
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js'



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfvglCa7eO_65LfxIyOeQel5b2Izdjs9o",
    authDomain: "restaurantsystem-b01d5.firebaseapp.com",
    databaseURL: "https://restaurantsystem-b01d5-default-rtdb.firebaseio.com",
    projectId: "restaurantsystem-b01d5",
    storageBucket: "restaurantsystem-b01d5.appspot.com",
    messagingSenderId: "475408154352",
    appId: "1:475408154352:web:7c5535bb751ccadc5e0c35"
};


const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);

// Initialisiation is over

// Configuration:
document.getElementById('popuplogin').onclick = function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    console.log(email);
    console.log(password);

    //for signup me

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("User created sucessfully");    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}



document.getElementById('SignupBtn').onclick = function () {
    var signup_E = document.getElementById("SignupEmail").value;
    var signup_P = document.getElementById("SignupPassword").value;
    var signup_RP = document.getElementById("RepeatSignPsw").value;
    console.log(signup_E);
    console.log(signup_P);
    console.log(signup_RP);


    createUserWithEmailAndPassword(auth, signup_E, signup_P)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("User created sucessfully");    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}

