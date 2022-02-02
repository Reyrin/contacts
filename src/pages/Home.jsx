import React from "react";
import { Redirect, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../store/contactSlice";

function Home({ isAuth }) {
	const dispatch = useDispatch();
	const contacts = useSelector((state) => state.contact.contacts);

	const deliteCon = (id) => {
		dispatch(deleteContact(id))
	}

	return isAuth ? (
		<div className="Home">
			<h1>Контакты</h1>

			{contacts.map((cont) => (
				<div style={{ border: "2px solid red" }} key={cont.id}>
					<p>{cont.name}</p>
					<p>{cont.number}</p>
					<Link to={`/edit/${cont.id}`}>Edit</Link>
					<button onClick={() => deliteCon(cont.id)}>
						delite
					</button>
				</div>
			))}

			<Link to={`/add`}>Add contact</Link>
		</div>
	) : (
		<Redirect to="/login" />
	);
}

export default Home;
