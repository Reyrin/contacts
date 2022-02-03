import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuth: true,
		users: [],
	},
	reducers: {
		setUsers(state, action) {
			state.users = action.payload;
		},
		logIn(state, action) {
			state.isAuth = action.payload;
		},
		logOut(state) {
			state.isAuth = false;
		},
	},
});

export const { setUsers, logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
