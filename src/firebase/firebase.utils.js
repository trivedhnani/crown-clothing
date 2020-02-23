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
export const createUserProfileDocument= async (userAuth,additionalData)=>{
  if(!userAuth) return;
  // console.log(firestore.doc('users/fefseg'))const snapShop=await userRef.get();
  // collection/document ref gives info about collection/document and 'CRUD'opearations can be performed 
  // Use snapShop to know whether that piece of data exists in database 
  // get the user id from database if it's not there store it
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt= new Date();
    try{
      await userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        }
      );
    }
    catch(error){
      console.log(error);
    }
  }
  return userRef;
}
export  const addCollectionAndDocuments=async (collectionKey,DocumentsTOAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  // console.log(collectionRef);
  const batch= firestore.batch();
  DocumentsTOAdd.forEach(document=>{
    const newDocRef= collectionRef.doc();//Create a document with a unique ID
    batch.set(newDocRef,document);
  });
  return await batch.commit();
}
export const convertCollectionssnapShotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const {title,items}=doc.data();
    return {
      rountName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
});
 return (transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{}));
  // console.log(transformedCollection);
}
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;