import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBirthdaysThunk } from "./birthdaysThunk";

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
	},
});

// Action creators are generated for each case reducer function
export const {} = birthdaySlice.actions;

export default birthdaySlice.reducer;
