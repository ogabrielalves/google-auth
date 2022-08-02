import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvR2gkdb6V_YXsNSu51mZA6t6PIMi5o58",
    authDomain: "auth-2a326.firebaseapp.com",
    projectId: "auth-2a326",
    storageBucket: "auth-2a326.appspot.com",
    messagingSenderId: "502621060850",
    appId: "1:502621060850:web:3d351ef514e2807f835a6b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);