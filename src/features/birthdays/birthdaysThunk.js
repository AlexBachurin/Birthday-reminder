import { getDataFromDb } from "../../firebase";

export const fetchBirthdaysThunk = async (uid, thunkAPI) => {
	try {
		const data = await getDataFromDb(uid);
		return data.birthdaysArr;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
