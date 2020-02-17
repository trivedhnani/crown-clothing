import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyAuPSaei-ZptKACqwSrcIr0qCwPrKlLj1M",
    authDomain: "crwn-clothing-6b123.firebaseapp.com",
    databaseURL: "https://crwn-clothing-6b123.firebaseio.com",
    projectId: "crwn-clothing-6b123",
    storageBucket: "crwn-clothing-6b123.appspot.com",
    messagingSenderId: "1078190799383",
    appId: "1:1078190799383:web:4ff5f5c01cb13c27e5ba52",
    measurementId: "G-1MZ7P3SLJT"
  };
  firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;