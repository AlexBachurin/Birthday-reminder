import {
	addNewBirthdayToDb,
	deleteBirthdayFromDb,
	getDataFromDb,
} from "../../firebase";

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
		//update birthdays arr in db by user id
		await addNewBirthdayToDb(uid, personObj);
		//fetch updated data from db and return updated arr as payload
		const data = await getDataFromDb(uid);
		return data.birthdaysArr;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};

export const deleteBirthdayThunk = async (values, thunkAPI) => {
	try {
		const { uid, id } = values;
		//delete birthday from db
		await deleteBirthdayFromDb(uid, id);
		//fetch updated array from db and return it
		const data = await getDataFromDb(uid);
		return data.birthdaysArr;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.code);
	}
};
