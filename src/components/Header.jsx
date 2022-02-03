import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../store/authSlice";

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuth);

	return (
		<header className="main-header">
			<p className="main-header__logo">📝 React Contacts</p>
			<div className="main-header__right">
				{isAuth ? (
					<div className="user">
						User: <span>{isAuth}</span> or {" "}
						
						<button onClick={() => dispatch(logOut())}>
							Log Out
						</button>
					</div>
				) : (
					<div className="links">
						<Link to="/login">Log in</Link> or{" "}
						<Link to="/register">Sign in</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
