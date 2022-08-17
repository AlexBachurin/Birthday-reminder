import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	createUserWithEmailAndPasswordThunk,
	loginUserWithGoogleThunk,
} from "./userThunk";

const initialState = {
	isLoading: false,
	user: null,
	error: null,
};

export const loginUserWithGoogle = createAsyncThunk(
	"user/loginUser",
	loginUserWithGoogleThunk
);

export const createUserWithEmailAndPassword = createAsyncThunk(
	"user/registerUser",
	createUserWithEmailAndPasswordThunk
);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: {
		[loginUserWithGoogle.pending]: (state) => {
			state.isLoading = true;
		},
		[loginUserWithGoogle.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
			alert(`hello ${action.payload.displayName}`);
		},
		[loginUserWithGoogle.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[createUserWithEmailAndPassword.pending]: (state) => {
			state.isLoading = true;
		},
		[createUserWithEmailAndPassword.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
			alert(`hello ${action.payload.displayName}`);
		},
		[createUserWithEmailAndPassword.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
