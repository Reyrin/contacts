import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import authReducer from "./authSlice";

export default configureStore({
	reducer: {
		contact: contactReducer,
		auth: authReducer,
	},
});
