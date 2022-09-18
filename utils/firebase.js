import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC0xl_tcetH92TwWILGiJf8789TnT4AUmI",
  authDomain: "helpbee-60358.firebaseapp.com",
  databaseURL: "https://helpbee-60358-default-rtdb.firebaseio.com",
  projectId: "helpbee-60358",
  storageBucket: "helpbee-60358.appspot.com",
  messagingSenderId: "887847567246",
  appId: "1:887847567246:web:99ffff6c1d377870c72edf",
};

console.log(!firebase, " is firebase");

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
