// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBuWKu2VA90kx_6ElG40jHX_g3KjpLLuYI",
	authDomain: "birthday-reminder-2022-a29b1.firebaseapp.com",
	projectId: "birthday-reminder-2022-a29b1",
	storageBucket: "birthday-reminder-2022-a29b1.appspot.com",
	messagingSenderId: "587055544482",
	appId: "1:587055544482:web:51116795ffc535a7b47ffb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google_provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInWithGooglePopUp = async () => {
	const res = await signInWithPopup(auth, google_provider);
	console.log(res.user);
};
