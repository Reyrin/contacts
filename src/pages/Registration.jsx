import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Form from "../components/Form";

function Registration() {
	async function postData(email, pass) {
		try {
			await axios.post("/users", { email, pass });
			alert("Вы успешно зарегестрировались!");
		} catch (error) {
			alert(error);
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
