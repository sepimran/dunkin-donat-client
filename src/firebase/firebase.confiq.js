// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYGjq3uG75FmQg8ljprf49EiCTlJKCTc4",
  authDomain: "dunkin-donat-client.firebaseapp.com",
  projectId: "dunkin-donat-client",
  storageBucket: "dunkin-donat-client.appspot.com",
  messagingSenderId: "611030898283",
  appId: "1:611030898283:web:d45874547b28a250c4032e",
  measurementId: "G-L984BNSX8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;