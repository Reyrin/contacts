import React from "react";

function Form({ title, handleClick }) {
	const [email, setEmail] = React.useState("");
	const [pass, setPass] = React.useState("");

	return (
		<div className="form">
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				type="password"
				value={pass}
				onChange={(e) => setPass(e.target.value)}
				placeholder="Password"
			/>
			<button onClick={() => handleClick(email, pass)}>{title}</button>
		</div>
	);
}

export default Form;
