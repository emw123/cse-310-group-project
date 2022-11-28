//import db from "./firebase"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// import firebase from 'firebase/compat/app';
import { getFirestore, doc, getDocs, collection, deleteDoc,
  setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
//import { getDatabase, ref, onValue} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAd7ejCkuFATzSxaVB9lWpIC-Seqw2F6M4",
  authDomain: "mapgamegentlebadgers.firebaseapp.com",
  projectId: "mapgamegentlebadgers",
  storageBucket: "mapgamegentlebadgers.appspot.com",
  messagingSenderId: "846784163575",
  appId: "1:846784163575:web:505dd6e01f09ba818fadf2",
  measurementId: "G-QFZEVLZVG6"
};
initializeApp(firebaseConfig);
const db = getFirestore()

const ref = collection(db, 'country')
let countries = [];
getDocs(ref)
    .then((snapshot) => {
        
        snapshot.docs.forEach((doc) => { 
          countries.push({id : doc.id, data: { ...doc.data()}})
        })
        //console.log(countries) //displays documents when the page was loaded
    })
//var ref = database.ref('country');

// declare an empty array
let firebaseData = countries;
// if array.length === 0 -> we get the data
//if (firebaseData.length === 0 ){
// Get a database reference to our posts


// Attach an asynchronous callback to read the data at our posts reference

// get firebase data and populate array
//}

// 

export default firebaseData;