import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBwjQBHONC0EBRpyylJuzKZCTZwPprsO7s",
    authDomain: "auth2-deea4.firebaseapp.com",
    projectId: "auth2-deea4",
    storageBucket: "auth2-deea4.appspot.com",
    messagingSenderId: "745495572879",
    appId: "1:745495572879:web:931dc6cb1f545dc1535bfa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);