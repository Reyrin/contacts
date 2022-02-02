import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Form } from "../components";

import { validate } from '../utils/validate';

function Registration({ users }) {
	async function postData(email, pass) {
		if (users.find(obj => obj.email === email)) {
			alert('Пользователь с таким email уже существует');
		} else if (validate(email, pass)) {
			try {
				await axios.post("/users", { email, pass });

				alert("Вы успешно зарегестрировались!");
			} catch (error) {
				alert(error);
			}
		}
	}


	return (
		<div className="Sign Up">
			<Form title="Sign Up" handleClick={postData} />
			<p>
				Or <Link to="/login">login</Link>
			</p>
		</div>
	);
}

export default Registration;
