import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCjmpCUYjrcWTD6kkZSkFxXEmNlbMSw1U",
  authDomain: "crown-clothing-db-62b6a.firebaseapp.com",
  projectId: "crown-clothing-db-62b6a",
  storageBucket: "crown-clothing-db-62b6a.appspot.com",
  messagingSenderId: "1087477490264",
  appId: "1:1087477490264:web:abe93308d60e8e8cd2e02d",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userDocSnapshot = await getDoc(userDocRef);
  console.log(userDocSnapshot.exists());

  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error", error);
    }
  }
  return userDocRef;
};
