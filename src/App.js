import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home, AddContact, EditContact, Login, Register } from "./pages";
import { Header } from "./components";
import { getUsers } from "./store/actions";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.auth.users);

	React.useEffect(() => {
		dispatch(getUsers());
	}, []);

	console.log(users);

	return (
		<div className="App">
			<ToastContainer position="top-center" />

			<Header />
			<div className="container">
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/add" exact>
					<AddContact />
				</Route>

				<Route path="/edit/:id" exact>
					<EditContact />
				</Route>

				<Route path="/login" exact>
					<Login />
				</Route>

				<Route path="/register" exact>
					<Register />
				</Route>
			</div>
		</div>
	);
}

export default App;
