import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import Form from "../components/Form";

function Login({ isAuth, setIsAuth, users }) {
	function login(email, pass) {
		let result = "Пользователь не найден";

		users.forEach((obj) => {
			if (email === obj.email) {
				if (pass === obj.pass) {
					setIsAuth(true);
				} else {
					result = "Не правильный пароль";
				}
			}
		});

		alert(result);
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
