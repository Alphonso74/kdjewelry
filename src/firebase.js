import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDznOqm6UyCku5C4zkiGigKprT0i-Qhplg",
    authDomain: "jewelry-byky.firebaseapp.com",
    databaseURL: "https://jewelry-byky-default-rtdb.firebaseio.com",
    projectId: "jewelry-byky",
    storageBucket: "jewelry-byky.appspot.com",
    messagingSenderId: "190658676069",
    appId: "1:190658676069:web:68afcb43dd3b5b33ce4d8c",
    measurementId: "G-0WDC0S6EV2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
