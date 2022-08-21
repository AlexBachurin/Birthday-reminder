import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import birthdaysReducer from "../features/birthdays/birthdaysSlice";
export const store = configureStore({
	reducer: {
		user: userReducer,
		birthdays: birthdaysReducer,
	},
});
