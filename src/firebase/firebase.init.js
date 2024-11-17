// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdpkxwxf-YmBmCf_oZE26-DX6ohORBLI",
  authDomain: "dragon-news-a856b.firebaseapp.com",
  projectId: "dragon-news-a856b",
  storageBucket: "dragon-news-a856b.firebasestorage.app",
  messagingSenderId: "332700366598",
  appId: "1:332700366598:web:8239febc1f00fe32579087",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
