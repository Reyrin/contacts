import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteContact } from "../store/contactSlice";

const Contact = ({ name, phone, id }) => {
	const dispatch = useDispatch();

	const deliteCon = (id) => {
		dispatch(deleteContact(id));
	};

	return (
		<div className="contact">
            <p className="contact__id">#{id + 1}</p>
			<p className="contact__name">{name}</p>
			<p className="contact__phone">+{phone}</p>
			<Link className="contact__edit" to={`/edit/${id}`}>
				Edit
			</Link>
			<button className="contact__delete" onClick={() => deliteCon(id)}>
				Delete
			</button>
		</div>
	);
};

export default Contact;
