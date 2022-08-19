import { addNewBirthdayToDb, getDataFromDb } from "../../firebase";

export const fetchBirthdaysThunk = async (uid, thunkAPI) => {
	try {
		const data = await getDataFromDb(uid);
		return data.birthdaysArr;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};

export const updateBirthdaysThunk = async (values, thunkAPI) => {
	try {
		const { uid, personObj } = values;
		await addNewBirthdayToDb(uid, personObj);
		const data = await getDataFromDb(uid);
		return data.birthdaysArr;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
