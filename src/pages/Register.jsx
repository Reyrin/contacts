import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { postUser } from "../store/actions";
import { Form } from "../components";
import { validate } from "../utils/validate";

function Register() {
	const history = useHistory();
	const dispatch = useDispatch();
	const users = useSelector((state) => state.auth.users);

	function postData(email, pass) {
		if (users.find((obj) => obj.email === email)) {
			toast.warning("A user with this email address already exists");
		} else if (validate(email, pass)) {
			dispatch(postUser(email, pass));

			toast.success("You have successfully registered!");
			history.push("/login");
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

export default Register;
