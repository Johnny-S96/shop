import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDv9b948gtwrvoEu6O_EVr8Udpaa6nhAi0",
  authDomain: "shop-db-62d98.firebaseapp.com",
  projectId: "shop-db-62d98",
  storageBucket: "shop-db-62d98.appspot.com",
  messagingSenderId: "1021313324974",
  appId: "1:1021313324974:web:189a3ed6fe53fc0299da3f",
  measurementId: "G-TK5BCS6STT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



