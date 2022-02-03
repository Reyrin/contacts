import { toast } from "react-toastify";

export const validate = (email, pass) => {
	const reEmail =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

	if (reEmail.test(String(email).toLowerCase())) {
		if (rePass.test(String(pass))) {
			return true;
		} else {
			toast.warning('The password must contain at least 8 characters, uppercase and lowercase letters and numbers');
		}
	} else {
		toast.warning(
			"Incorrect email \nEntery e-mail format: name@domain.com"
		);
	}
};
