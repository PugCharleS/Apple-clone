// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOIqgkza_BQswipcWr5pQS5s1ymvATAc4",
  authDomain: "apple-clone-818bf.firebaseapp.com",
  projectId: "apple-clone-818bf",
  storageBucket: "apple-clone-818bf.appspot.com",
  messagingSenderId: "656609964664",
  appId: "1:656609964664:web:c1b0ac52d182092309338d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
