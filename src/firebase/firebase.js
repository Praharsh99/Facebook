import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDzQzj336Z5q6WK9-_QVOTY0gXlViBOqg",
  authDomain: "facebook-306d8.firebaseapp.com",
  databaseURL: "https://facebook-306d8.firebaseio.com",
  projectId: "facebook-306d8",
  storageBucket: "facebook-306d8.appspot.com",
  messagingSenderId: "750266137270",
  appId: "1:750266137270:web:ffb48f3db8e98b5633c417",
  measurementId: "G-0FWGBJESH5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, signInWithGoogle };
export default db;
