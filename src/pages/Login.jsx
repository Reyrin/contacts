import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import Form from "../components/Form";

import { validate } from "../utils/validate";

function Login({ isAuth, setIsAuth, users }) {
	function login(email, pass) {
		if (validate(email, pass)) {
			let result = "User not found";

			users.forEach((obj) => {
				if (email === obj.email) {
					if (pass === obj.pass) {
						result = "Login completed!";
						setIsAuth(true);
					} else {
						result = "Incorrect password!";
					}
				}
			});

			alert(result);
		}
	}

	return (
		<div className="Login">
			{isAuth ? (
				<Redirect to="/" />
			) : (
				<div>
					<Form title="Log In" handleClick={login} />
					<p>
						Or <Link to="/registration">register</Link>
					</p>
				</div>
			)}
		</div>
	);
}

export default Login;
