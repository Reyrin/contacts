import React from "react";

function Form({ title, handleClick }) {
	const [email, setEmail] = React.useState("");
	const [pass, setPass] = React.useState("");
	return (
		<div>
			<form action="#">
				<input
					required
					pattern="((\w+[-.]\w+)*|(\w+))@((\w+)|(\w+[-]\w+)*)(\.\w{2,})+"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
				/>
				<input
					required
					type="password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					placeholder="password"
				/>
				<button onClick={() => handleClick(email, pass)}>
					{title}
				</button>
			</form>
		</div>
	);
}

export default Form;
