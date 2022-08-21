import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	deleteBirthdayThunk,
	fetchBirthdaysThunk,
	updateBirthdaysThunk,
} from "./birthdaysThunk";

const initialState = {
	loading: false,
	birthdays: [],
	error: null,
};

//fetch birthdays
export const fetchBirthdays = createAsyncThunk(
	"birthdays/fetchBirthdays",
	fetchBirthdaysThunk
);
//update birthdays
export const updateBirthdaysArr = createAsyncThunk(
	"birthdays/updateBirthdays",
	updateBirthdaysThunk
);
//delete single birthday
export const deleteBirthday = createAsyncThunk(
	"brithdays/deleteBirthday",
	deleteBirthdayThunk
);

export const birthdaySlice = createSlice({
	name: "birthdays",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchBirthdays.pending]: (state) => {
			state.loading = true;
		},
		[fetchBirthdays.fulfilled]: (state, action) => {
			state.loading = false;
			state.birthdays = action.payload;
		},
		[fetchBirthdays.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[updateBirthdaysArr.pending]: (state) => {
			state.loading = true;
		},
		[updateBirthdaysArr.fulfilled]: (state, action) => {
			state.loading = false;
			state.birthdays = action.payload;
		},
		[updateBirthdaysArr.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		[deleteBirthday.pending]: (state) => {
			state.loading = true;
		},
		[deleteBirthday.fulfilled]: (state, action) => {
			state.loading = false;
			state.birthdays = action.payload;
		},
		[deleteBirthday.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = birthdaySlice.actions;

export default birthdaySlice.reducer;
