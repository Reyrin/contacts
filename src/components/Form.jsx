import React from "react";

function Form({ title, handleClick }) {
	const [email, setEmail] = React.useState("admin@admin.com");
	const [pass, setPass] = React.useState("Admin123");

	return (
		<div className="form">
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
				className="form__email"
			/>
			<input
				type="password"
				value={pass}
				onChange={(e) => setPass(e.target.value)}
				placeholder="Password"
				className="form__pass"
			/>
			<button className="form__submit" onClick={() => handleClick(email, pass)}>{title}</button>
		</div>
	);
}

export default Form;
