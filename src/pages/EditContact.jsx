import React from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { updateContact } from '../store/contactSlice';

const EditContact = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	const contacts = useSelector((state) => state.contact.contacts);
	const currentContact = contacts.find((cont) => cont.id === +id);

	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");

	React.useEffect(() => {
		setName(currentContact.name);
		setPhone(currentContact.number);
	}, [currentContact])

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			id: currentContact.id,
			name,
			number: phone,
		}

		dispatch(updateContact(data));
		toast.warning("Please fill in all fields!!", {position: "top-center"});
		history.push("/");
	};

	return (
		<div className="edit-contact">
			{currentContact ? (
				<>
					<h1>Edit Contact {id}</h1>

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
				</>
			) : (
				<div className="not-found">User {id} not found</div>
			)}
		</div>
	);
};

export default EditContact;
