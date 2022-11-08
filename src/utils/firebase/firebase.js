import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCVrNYGnCYbby0O09Yfw34KavsKCY1rRfQ",
    authDomain: "proyecto-svelte.firebaseapp.com",
    projectId: "proyecto-svelte",
    storageBucket: "proyecto-svelte.appspot.com",
    messagingSenderId: "985769635770",
    appId: "1:985769635770:web:ddf8e9fc138bf9a8fcf783"
};

import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

