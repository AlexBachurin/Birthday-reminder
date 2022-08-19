// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
export const app = initializeApp(firebaseConfig);

//create db(points to our database)
export const db = getFirestore(app);

//create Users collection in our database, with id of user as a document name
export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) return;
	//we want to get data from user authentication and store it inside our db
	// db = database, 'users' - collection name, id of user(user.uid) - document name
	const userDocRef = doc(db, "users", userAuth.uid);
	//create snapshot to check if instance of userDocRef exists in database
	const userSnapshot = await getDoc(userDocRef);

	//if user data not exits
	if (!userSnapshot.exists()) {
		//create/set the document with data from userAuth to collection
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				birthdaysArr: [],
			});
		} catch (error) {
			console.log("error at creating user document", error);
		}
	}
	//if user data exists
	return userSnapshot;
};

//get data from firebase with provided user id
export const getDataFromDb = async (uid) => {
	//db - database, users-collection name, uid - document name
	const docRef = doc(db, "users", uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		// doc.data() will be undefined in this case
		return null;
	}
};
