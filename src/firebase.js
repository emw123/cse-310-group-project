import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd7ejCkuFATzSxaVB9lWpIC-Seqw2F6M4",
    authDomain: "mapgamegentlebadgers.firebaseapp.com",
    projectId: "mapgamegentlebadgers",
    storageBucket: "mapgamegentlebadgers.appspot.com",
    messagingSenderId: "846784163575",
    appId: "1:846784163575:web:505dd6e01f09ba818fadf2",
    measurementId: "G-QFZEVLZVG6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;