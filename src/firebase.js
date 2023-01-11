import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD8cR_rTiK6AfPHdMMrTJkdprVfdHW-PRk",
    authDomain: "slack-clone0-cd4a4.firebaseapp.com",
    projectId: "slack-clone0-cd4a4",
    storageBucket: "slack-clone0-cd4a4.appspot.com",
    messagingSenderId: "435483568451",
    appId: "1:435483568451:web:470ddd3c1774971e27a7f6"
  };
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {auth , provider , db}