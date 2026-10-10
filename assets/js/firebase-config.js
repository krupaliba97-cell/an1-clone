import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, onValue, get, push, set, query, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCfGhQ4RgnygWO2HX8YMQYtOVSpcHKBsUc",
    authDomain: "apkqube-aa855.firebaseapp.com",
    databaseURL: "https://apkqube-aa855-default-rtdb.firebaseio.com",
    projectId: "apkqube-aa855",
    storageBucket: "apkqube-aa855.firebasestorage.app",
    messagingSenderId: "215129305035",
    appId: "1:215129305035:web:fdfb8fe88486c778d3504e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth, ref, onValue, get, push, set, query, orderByChild, equalTo, storageRef, uploadBytes, getDownloadURL, signInWithEmailAndPassword, signOut, onAuthStateChanged };
