import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../store/authSlice";

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuth);

	return (
		<header className="main-header">
			<p className="logo">📝 React Contacts</p>
			<div className="">
				{isAuth ? (
					<div>
						{isAuth} or{" "}
						<button onClick={() => dispatch(logOut())}>
							Log Out
						</button>
					</div>
				) : (
					<div>
						<Link to="/login">Log In</Link> or{" "}
						<Link to="/register">Sign In</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
