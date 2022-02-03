import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addContact } from "../store/contactSlice";

const AddContact = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const isAuth = useSelector((state) => state.auth.isAuth);
	const contacts = useSelector(state => state.contact.contacts);

	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const checkContactPhoneExists = contacts.filter((contact) =>
			contact.phone === phone ? contact : null
		);

		if (checkContactPhoneExists.length > 0) {
			return toast.error("This phone number already exists!");
		}

		if (!name || !phone) {
			return toast.warning("Please fill in all fields!");
		}

		const data = {
			name,
			phone,
		};

		dispatch(addContact(data));
		toast.success("Contact added successfully!");
		history.push("/");
	};

	return isAuth ? (
		<div className="add-contact">
			<h1>Add Contact</h1>
	
			<form onSubmit={handleSubmit}>
				<input
					className="form-control"
					type="text"
					placeholder="Full name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="form-control"
					type="number"
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input
					className="btn btn-block btn-dark"
					type="submit"
					value="Add Contact"
				/>
				<button
					type="button"
					onClick={() => history.push("/")}
				>
					cancel
				</button>
			</form>
		</div>
	) : (
		<Redirect to="/login" />
	);
};

export default AddContact;
