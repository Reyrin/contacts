import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

import { addContact } from '../store/contactSlice';


const AddContact = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const contacts = useSelector(state => state.contact.contacts);

	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");

    const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
			name,
			phone,
		}

		dispatch(addContact(data))
		toast.warning("Please fill in all fields!!", {position: "top-center"});
		history.push("/");
	  };

	return (
		<div className="add-contact">
			<h1>Add Contact</h1>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Full name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						type="number"
						placeholder="Phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						className="btn btn-block btn-dark"
						type="submit"
						value="Add Contact"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddContact;
