import React from "react";
import { Redirect } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { updateContact } from "../store/contactSlice";

const EditContact = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	const isAuth = useSelector((state) => state.auth.isAuth);
	const contacts = useSelector((state) => state.contact.contacts);
	const currentContact = contacts.find((cont) => cont.id === +id);

	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");

	React.useEffect(() => {
		setName(currentContact.name);
		setPhone(currentContact.phone);
	}, [currentContact]);

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
			id: currentContact.id,
			name,
			phone,
		};

		dispatch(updateContact(data));
		toast.success("Contact updated successfully!");
		history.push("/");
	};

	return isAuth ? (
		<div className="edit-contact">
			{currentContact ? (
				<>
					<h1>Edit Contact {+id + 1}</h1>

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
								Edit Contact
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
				</>
			) : (
				<div className="not-found">User {id} not found</div>
			)}
		</div>
	) : (
		<Redirect to="/login" />
	);
};

export default EditContact;
