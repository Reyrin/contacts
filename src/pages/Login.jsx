import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { logIn } from "../store/authSlice";
import { Form } from "../components";
import { validate } from "../utils/validate";

function Login() {
	const dispatch = useDispatch();
	const {isAuth, users} = useSelector((state) => state.auth);

	function login(email, pass) {
		if (validate(email, pass)) {
			let result = "User not found";

			users.forEach((obj) => {
				if (email === obj.email) {
					if (pass === obj.pass) {
						result = "Login completed!";
						dispatch(logIn(obj.email.split("@")[0]));
					} else {
						result = "Incorrect password!";
					}
				}
			});

			toast(result);
		}
	}

	return (
		<div className="login">
			{isAuth ? (
				<Redirect to="/" />
			) : (
				<div>
					<h1>Login</h1>
					<Form title="Log in" handleClick={login} />
					<p className="or">
						or <Link to="/register">register</Link>
					</p>
				</div>
			)}
		</div>
	);
}

export default Login;
