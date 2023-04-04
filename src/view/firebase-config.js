<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
=======
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
>>>>>>> 4271918c7a806d4b2a4f0d2f17121a984feacdcd



const firebaseConfig = {
    apiKey: "AIzaSyAASOU46kcXdRSBxv8E6_8i0SNjmYhSy-Y" ,
    authDomain: "vendia-care-9ea12.firebaseapp.com",
    projectId: "vendia-care-9ea12",
    storageBucket: "vendia-care-9ea12.appspot.com",
    messagingSenderId: "723563005811",
    appId: "1:723563005811:web:75649449adbfe67967e706",
    measurementId: "G-VGMNCN12WL"
  };  

  const app = initializeApp(firebaseConfig);
<<<<<<< HEAD

  export const auth = getAuth(app);
  export const db = getFirestore(app);
=======
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { auth, db };
>>>>>>> 4271918c7a806d4b2a4f0d2f17121a984feacdcd
