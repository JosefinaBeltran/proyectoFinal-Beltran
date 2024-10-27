// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDGnVlRAuUxpGnT6FNrSBb2nnxjG2PneZU",
	authDomain: "proyectofinal-beltran.firebaseapp.com",
	projectId: "proyectofinal-beltran",
	storageBucket: "proyectofinal-beltran.appspot.com",
	messagingSenderId: "102052924588",
	appId: "1:102052924588:web:df763ed9aaf7d07194e309"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)