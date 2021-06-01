import  firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBr2g1ix69tMSJrIm919PcKeuKzwNz40_s",
    authDomain: "photo-gallery-83f81.firebaseapp.com",
    projectId: "photo-gallery-83f81",
    storageBucket: "photo-gallery-83f81.appspot.com",
    messagingSenderId: "664204056254",
    appId: "1:664204056254:web:c49f85ededaedf8b3830ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
