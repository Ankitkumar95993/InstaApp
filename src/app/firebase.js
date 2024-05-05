// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instaapp-b2d61.firebaseapp.com",
  projectId: "instaapp-b2d61",
  storageBucket: "instaapp-b2d61.appspot.com",
  messagingSenderId: "1012835775091",
  appId: "1:1012835775091:web:0ae1de94514d1612797006",
  measurementId: "G-11RQ7FJ6BB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write:if
//         request.resource.size<2*1024*1024 &&
//         request.resource.contentType.mathches('image/.*')
//       }
//     }
//   }