export const validate = (email, pass) => {
	const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	const rePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

	if (reEmail.test(String(email).toLowerCase())) {
		if (rePass.test(String(pass))) {
			return true;
		} else {
			alert(`Incorrect password
-Contain at least 8 characters
-Contain at least 1 number
-Contain at least 1 lowercase character (a-z)
-Contain at least 1 uppercase character (A-Z)
-Contains only 0-9a-zA-Z`);
		}
	} else {
		alert("Incorrect email \nEntery e-mail format: name@domain.com");
	}
};
