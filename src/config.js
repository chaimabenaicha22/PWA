import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmR42ffYrM_L8gsatsjoRnFaoQwuIixwc",
    authDomain: "instaclone-ddbb4.firebaseapp.com",
    projectId: "instaclone-ddbb4",
    storageBucket: "instaclone-ddbb4.appspot.com",
    messagingSenderId: "81024756752",
    appId: "1:81024756752:web:6bb34dc105b6b381d4ee95",
    measurementId: "G-3JS6FX9TRM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };