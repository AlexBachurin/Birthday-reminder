import {
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app, createUserDocumentFromAuth } from "../../firebase";
const google_provider = new GoogleAuthProvider();
export const auth = getAuth(app);

//login with google
export const loginUserWithGoogleThunk = async (_, thunkAPI) => {
	try {
		const res = await signInWithPopup(auth, google_provider);
		return res.user;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};

//registration
export const createUserWithEmailAndPasswordThunk = async (values, thunkAPI) => {
	try {
		const { username } = values;
		const res = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		const user = res.user;
		//if we getting back user update it immediately with provided username
		if (user) {
			await updateProfile(user, {
				displayName: username,
			});
		}
		const { displayName, email, photoURL, uid } = res.user;
		const newUser = {
			displayName,
			email,
			photoURL,
			uid,
		};
		//add user to collection in our db on registration
		await createUserDocumentFromAuth(user);
		return newUser;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
//login with email and password
export const signInWithEmailAndPasswordThunk = async (values, thunkAPI) => {
	try {
		const res = await signInWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		const { displayName, email, photoURL, uid } = res.user;
		const newUser = {
			displayName,
			email,
			photoURL,
			uid,
		};
		return newUser;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
//sign out
export const signOutUserThunk = async (_, thunkAPI) => {
	try {
		const res = await signOut(auth);
		console.log(res);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
