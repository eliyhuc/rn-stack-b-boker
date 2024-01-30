import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAX40Z0TfsYjShIgFxJmS5ugOVGT2Zk0aY",
  authDomain: "gadgetapp-boker-b.firebaseapp.com",
  projectId: "gadgetapp-boker-b",
  storageBucket: "gadgetapp-boker-b.appspot.com",
  messagingSenderId: "1025667557267",
  appId: "1:1025667557267:web:ff40fdd78a870a99e4aa66"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)