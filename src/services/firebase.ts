import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCS_E-3R-XK3uFZ36uJmuHiH8zv4FUwt7Y",
  authDomain: "workout-tracker-a1b997.firebaseapp.com",
  projectId: "workout-tracker-a1b997",
  storageBucket: "workout-tracker-a1b997.appspot.com",
  messagingSenderId: "944685815583",
  appId: "1:944685815583:web:2cebebefe31b7585bf822a",
  measurementId: "G-G0QSWMHNWT"
};

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = firebase.firestore();