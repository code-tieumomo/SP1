// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

if (localStorage.getItem("user")) {
    window.location.href = "/index.html";
}

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

document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("user", user.email);
            window.location.href = "/index.html";
            alert("Dang nhap thanh cong");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
