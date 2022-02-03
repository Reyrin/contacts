import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
	name: "contact",
	initialState: {
		contacts: [
			{
				id: 0,
				name: "Ivan Ivanov",
				phone: '12345678',
			},
		],
	},
	reducers: {
		addContact(state, action) {
			state.contacts.push({
				id: state.contacts.length,
				name: action.payload.name,
				phone: action.payload.phone,
			});
		},
		deleteContact(state, action) {
			state.contacts = state.contacts.filter(
				(cont) => cont.id !== action.payload
			);
		},
		updateContact(state, action) {
			state.contacts[action.payload.id] = action.payload;
		},
		resetContact(state, action) {
			state.contacts = [{ id: null, name: null, phone: null }];
		},
	},
});

export const { addContact, deleteContact, updateContact, resetContact } = contactSlice.actions;

export default contactSlice.reducer;
