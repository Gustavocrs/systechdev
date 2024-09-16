import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnU1_OyZXPNNakQnTLfOtwMzkmjoJ9fn8",
  authDomain: "systech-data.firebaseapp.com",
  projectId: "systech-data",
  storageBucket: "systech-data.appspot.com",
  messagingSenderId: "32807101254",
  appId: "1:32807101254:web:ae497c3e5d662d0d9b3b47",
};

export const appdb = initializeApp(firebaseConfig);
