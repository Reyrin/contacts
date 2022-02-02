import React from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home, AddContact, EditContact, Login, Registration } from './pages';

import "./App.css";

function App() {
	const [users, setUsers] = React.useState([]);
	const [isAuth, setIsAuth] = React.useState(true);

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
			<ToastContainer />
			<header>
				<p>Contacts App</p>
				<p>{<Link to="/login">Log In</Link> && isAuth} </p>
			</header>

			<Route path="/" exact>
				<Home isAuth={isAuth} />
			</Route>
			<Route path="/add" exact>
				<AddContact />
			</Route>
			<Route path="/edit/:id" exact>
				<EditContact />
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
