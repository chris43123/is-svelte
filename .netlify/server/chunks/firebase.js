import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVrNYGnCYbby0O09Yfw34KavsKCY1rRfQ",
  authDomain: "proyecto-svelte.firebaseapp.com",
  projectId: "proyecto-svelte",
  storageBucket: "proyecto-svelte.appspot.com",
  messagingSenderId: "985769635770",
  appId: "1:985769635770:web:ddf8e9fc138bf9a8fcf783"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
  db as d
};
