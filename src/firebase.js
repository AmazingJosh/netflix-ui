// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBet4VlQZzHC6fHmGVBq92VOwM2kCDYPOE",
  authDomain: "netflix-47b4b.firebaseapp.com",
  projectId: "netflix-47b4b",
  storageBucket: "netflix-47b4b.appspot.com",
  messagingSenderId: "508168599151",
  appId: "1:508168599151:web:0b34007699d07ca56d3f9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)