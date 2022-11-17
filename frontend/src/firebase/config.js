import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBIW5NS6vulylHY1I2LmTe8RpM7rc608l4",
  authDomain: "shop-app-582f3.firebaseapp.com",
  projectId: "shop-app-582f3",
  storageBucket: "shop-app-582f3.appspot.com",
  messagingSenderId: "423829585282",
  appId: "1:423829585282:web:a677854daecadd7b33a39b",
  measurementId: "G-26DXX2VH7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
