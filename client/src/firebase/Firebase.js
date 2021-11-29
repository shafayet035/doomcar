import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeNBSAsX3V58rbT42McCEph7Y2Bfv98i8",
  authDomain: "doom-cars.firebaseapp.com",
  projectId: "doom-cars",
  storageBucket: "doom-cars.appspot.com",
  messagingSenderId: "284891862742",
  appId: "1:284891862742:web:200b33deb4e07518e79b77",
};

const initFirebase = () => {
  return initializeApp(firebaseConfig);
};

export default initFirebase;
