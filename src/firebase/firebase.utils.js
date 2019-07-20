import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDYMRGPDOZq5vHUUL592JQd5x_POBZuHeI",
  authDomain: "crwn-db-ac8a7.firebaseapp.com",
  databaseURL: "https://crwn-db-ac8a7.firebaseio.com",
  projectId: "crwn-db-ac8a7",
  storageBucket: "",
  messagingSenderId: "967464667315",
  appId: "1:967464667315:web:1a220322deb3975e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


