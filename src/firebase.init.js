// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATyPC8obFPP_eJE63yS6fQiHI5wuU3TrU",
    authDomain: "simple-emajhon-firebase-ceb06.firebaseapp.com",
    projectId: "simple-emajhon-firebase-ceb06",
    storageBucket: "simple-emajhon-firebase-ceb06.appspot.com",
    messagingSenderId: "1045810245104",
    appId: "1:1045810245104:web:a0ba7c3196aa87aa1b0135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;