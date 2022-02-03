import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addContact } from "../store/contactSlice";

const AddContact = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const isAuth = useSelector((state) => state.auth.isAuth);
	const contacts = useSelector((state) => state.contact.contacts);

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
			id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
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

			<form className="form-contact" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<div className="form-contact__btn">
					<button
						className="form-contact__submit"
						type="submit"
					>
						Add Contact
					</button>
					<button
						className="form-contact__cancel"
						type="button"
						onClick={() => history.push("/")}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	) : (
		<Redirect to="/login" />
	);
};

export default AddContact;
