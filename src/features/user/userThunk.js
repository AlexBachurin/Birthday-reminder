import {
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
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
		user.displayName = username;
		return user;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
