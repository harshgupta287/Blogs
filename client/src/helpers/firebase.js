import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "mern-blog-39d1c.firebaseapp.com",
  projectId: "mern-blog-39d1c",
  storageBucket: "mern-blog-39d1c.appspot.com",
  messagingSenderId: "231901863661",
  appId: "1:231901863661:web:19a20ad7bef231b30bb6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }