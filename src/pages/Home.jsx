import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isAuth }) {
	return isAuth ? <h1>Home</h1> : <Redirect to="/login" />;
}

export default Home;
