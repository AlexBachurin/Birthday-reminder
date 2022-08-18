import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
	createUserWithEmailAndPasswordThunk,
	loginUserWithGoogleThunk,
	signInWithEmailAndPasswordThunk,
	signOutUserThunk,
} from "./userThunk";

const initialState = {
	isLoading: false,
	//get user from localstorage on app reload to persist user after page reload
	user: getUserFromLocalStorage(),
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

export const signInWithEmailAndPassword = createAsyncThunk(
	"user/signInWithEmail",
	signInWithEmailAndPasswordThunk
);

export const signOutUser = createAsyncThunk(
	"user/signOutUser",
	signOutUserThunk
);

// export const checkAuthSession = createAsyncThunk(
// 	"user/checkAuthSession",
// 	checkAuthSessionThunk
// );

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
			addUserToLocalStorage(action.payload);
			alert(`hello ${action.payload.displayName}`);
		},
		[loginUserWithGoogle.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			alert(`Error: ${action.payload}`);
		},
		[createUserWithEmailAndPassword.pending]: (state) => {
			state.isLoading = true;
		},
		[createUserWithEmailAndPassword.fulfilled]: (state, action) => {
			state.user = action.payload;
			addUserToLocalStorage(action.payload);
			state.isLoading = false;
			alert(`hello ${action.payload.displayName}`);
		},
		[createUserWithEmailAndPassword.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			alert(`Error: ${action.payload}`);
		},
		[signInWithEmailAndPassword.pending]: (state) => {
			state.isLoading = true;
		},
		[signInWithEmailAndPassword.fulfilled]: (state, action) => {
			state.isLoading = false;
			addUserToLocalStorage(action.payload);
			state.user = action.payload;
			alert(`hello ${action.payload.displayName}`);
		},
		[signInWithEmailAndPassword.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			alert(`Error: ${action.payload}`);
		},
		[signOutUser.pending]: (state) => {
			state.isLoading = false;
		},
		[signOutUser.fulfilled]: (state, action) => {
			state.user = null;
			removeUserFromLocalStorage();
			state.isLoading = false;
		},
		[signOutUser.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// [checkAuthSession.pending]: (state) => {
		// 	state.isLoading = true;
		// },
		// [checkAuthSession.fulfilled]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.user = action.payload;
		// },
		// [checkAuthSession.rejected]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.payload;
		// },
	},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
