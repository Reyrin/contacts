import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Contact } from "../components";
import { resetContact } from "../store/contactSlice";

function Home() {
	const dispatch = useDispatch();

	const contacts = useSelector((state) => state.contact.contacts);
	const isAuth = useSelector((state) => state.auth.isAuth);

	return isAuth ? (
		<div className="Home">
			<h1>Contacts</h1>
			<Link className="add-btn" to={`/add`}>
				Add Contact
			</Link>

			{contacts.length ? (
				<>
					<button
						className="rest-btn"
						onClick={() => dispatch(resetContact())}
					>
						❌
					</button>

					<div className="header-contacts">
						<div className="header-contacts__id">Id</div>
						<div className="header-contacts__name">Name</div>
						<div className="header-contacts__phone">Phone</div>
						<div className="header-contacts__actions">Actions</div>
					</div>
					{contacts.map((cont) => (
						<Contact key={cont.id} {...cont} />
					))}
				</>
			) : (
				<h2 className="empty">You need to add contacts!</h2>
			)}
		</div>
	) : (
		<Redirect to="/login" />
	);
}

export default Home;
