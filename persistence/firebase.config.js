// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0xl_tcetH92TwWILGiJf8789TnT4AUmI",
  authDomain: "helpbee-60358.firebaseapp.com",
  projectId: "helpbee-60358",
  storageBucket: "helpbee-60358.appspot.com",
  messagingSenderId: "887847567246",
  appId: "1:887847567246:web:99ffff6c1d377870c72edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };