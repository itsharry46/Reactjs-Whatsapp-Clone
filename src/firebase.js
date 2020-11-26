import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFpPFu4lX3hKzxHTA2KbJkokxQyXU2k64",
  authDomain: "reactjs-whatsapp.firebaseapp.com",
  databaseURL: "https://reactjs-whatsapp.firebaseio.com",
  projectId: "reactjs-whatsapp",
  storageBucket: "reactjs-whatsapp.appspot.com",
  messagingSenderId: "131575094535",
  appId: "1:131575094535:web:6e608c1874673ff4bb79a2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;