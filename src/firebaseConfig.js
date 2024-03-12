// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjSu5o-9Yn79TMBXhSWAOp8XXykgkEVQ8",
  authDomain: "spotwatt-32d07.firebaseapp.com",
  projectId: "spotwatt-32d07",
  storageBucket: "spotwatt-32d07.appspot.com",
  messagingSenderId: "9499727677",
  appId: "1:9499727677:web:8bbbca23d2d870359f5754"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);