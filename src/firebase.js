import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnAxK18gpMp5qFhmKjm_svo_Dr4OAu7cU",
    authDomain: "slack-clone-edea0.firebaseapp.com",
    projectId: "slack-clone-edea0",
    storageBucket: "slack-clone-edea0.appspot.com",
    messagingSenderId: "498933751164",
    appId: "1:498933751164:web:eac6edcf0482048cf298f9",
    measurementId: "G-R6ZDW3VEE2"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

const auth = firebaseapp.auth();

const provider = new firebase.auth.GoogleAuthProvider;

export default db;

export { auth,provider };