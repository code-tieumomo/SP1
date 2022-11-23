// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";

if (localStorage.getItem("user")) {
    window.location.href = "/index.html";
}

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrCxJl_09mkdnNrCMoAUBG5pDGK4wNBqw",
    authDomain: "jsi-07-928bf.firebaseapp.com",
    projectId: "jsi-07-928bf",
    storageBucket: "jsi-07-928bf.appspot.com",
    messagingSenderId: "177181422559",
    appId: "1:177181422559:web:1ae3bdb7127e2bddee8a6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            set(ref(database, "users/" + user.uid), {
                email: email,
                password: password,
                // profile_picture : imageUrl
            })
                .then(() => {
                    // Data saved successfully!
                    alert("Dang ky thanh cong");
                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });

            localStorage.setItem("user", user.email);
            window.location.href = "/index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });
});
