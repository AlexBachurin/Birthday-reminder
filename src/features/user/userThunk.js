import {
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";
const google_provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const loginUserWithGoogleThunk = async (_, thunkAPI) => {
	try {
		const res = await signInWithPopup(auth, google_provider);
		return res.user;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};

export const createUserWithEmailAndPasswordThunk = async (values, thunkAPI) => {
	try {
		const { username, email, password } = values;
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		//if we getting back user update it immediately with provided username
		if (user) {
			await updateProfile(user, {
				displayName: username,
			});
		}
		return user.providerData[0];
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};

export const signInWithEmailAndPasswordThunk = async (values, thunkAPI) => {
	try {
		const { email, password } = values;
		const res = await signInWithEmailAndPassword(auth, email, password);
		console.log(res.user.providerData[0]);
		return res.user.providerData[0];
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
