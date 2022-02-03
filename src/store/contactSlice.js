import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
	name: "contact",
	initialState: {
		contacts: [
			{
				id: 0,
				name: "Ivan Ivanov",
				phone: '71234567890',
			},
			{
				id: 1,
				name: "Megafon",
				phone: '1111',
			},
			{
				id: 2,
				name: "Grandmother",
				phone: '79259650099',
			},
		],
	},
	reducers: {
		addContact(state, action) {
			state.contacts.push({
				id: action.payload.id,
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
			const contactUpdate = state.contacts.filter((contact) =>
				contact.id === action.payload.id
				? Object.assign(contact, action.payload)
				: contact
			);
			state.contacts = contactUpdate;
		},
		resetContact(state, action) {
			state.contacts = [];
		},
	},
});

export const { addContact, deleteContact, updateContact, resetContact } = contactSlice.actions;

export default contactSlice.reducer;
