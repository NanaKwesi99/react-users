import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5NaoVsDR75L-G7pYUQ2w79jgD0FQn7N8",
  authDomain: "react-users-eb50f.firebaseapp.com",
  projectId: "react-users-eb50f",
  storageBucket: "react-users-eb50f.appspot.com",
  messagingSenderId: "825074670808",
  appId: "1:825074670808:web:e327426972601c0e760bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  

  export default firebase;