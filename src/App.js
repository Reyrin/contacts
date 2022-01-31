import React from "react";
import axios from 'axios';

import { Route } from "react-router-dom";

import { Home, Login, Registration } from './pages';

import "./App.css";

function App() {
	const [users, setUsers] = React.useState([]);
	const [isAuth, setIsAuth] = React.useState(false);

	React.useEffect(() => {
		try {
			async function fetchData() {
				const users = await axios.get("/users");

				setUsers(users.data);
			}
			fetchData();
		} catch (error) {
			alert(error);
		}
	}, []);

	console.log(users);

	return (
		<div className="App">
			<Route path="/" exact>
				<Home isAuth={isAuth} />
			</Route>
			<Route path="/login" exact>
				<Login isAuth={isAuth} setIsAuth={setIsAuth} users={users} />
			</Route>
			<Route path="/registration" exact>
				<Registration users={users} />
			</Route>
		</div>
	);
}

export default App;
