import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD2rXC1BmNhAt00QmXxMGRF2PziJjOH840",
  authDomain: "discord-clone-2086b.firebaseapp.com",
  databaseURL: "https://discord-clone-2086b.firebaseio.com",
  projectId: "discord-clone-2086b",
  storageBucket: "discord-clone-2086b.appspot.com",
  messagingSenderId: "994694866195",
  appId: "1:994694866195:web:d71b6cc12ea333a95fa6e6",
  measurementId: "G-44B7YYRD64",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
