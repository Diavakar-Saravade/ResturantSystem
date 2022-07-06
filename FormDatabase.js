
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase } from "https://restaurantsystem-b01d5-default-rtdb.firebaseio.com";
<script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/9.8.3/firebase-database.min.js"></script>



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

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});