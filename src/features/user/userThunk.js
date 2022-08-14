import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
const google_provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginUserWithGoogleThunk = async (_, thunkAPI) => {
	try {
		const res = await signInWithPopup(auth, google_provider);
		return res.user;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
