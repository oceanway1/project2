import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATAYTLmdEo7IPANSyWZGvfO_O9-pUcdrU",
    authDomain: "contact-form-f8448.firebaseapp.com",
    databaseURL: "https://contact-form-f8448-default-rtdb.firebaseio.com",
    projectId: "contact-form-f8448",
    storageBucket: "contact-form-f8448.appspot.com",
    messagingSenderId: "738725582217",
    appId: "1:738725582217:web:04f9e8ee79910f30053d58"
});

var db = firebaseApp.firestore();

export { db };