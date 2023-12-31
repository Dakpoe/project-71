import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyAAIHqhQMCHLAReMMhKh3hWhBMmGKV7F3o",
  authDomain: "bike-online-website-app.firebaseapp.com",
  projectId: "bike-online-website-app",
  storageBucket: "bike-online-website-app.appspot.com",
  messagingSenderId: "568420241873",
  appId: "1:568420241873:web:b800869d1551bb930210f0",
  measurementId: "G-23KZH6SY6B"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
