import axios from "axios";
import { setUsers } from "./authSlice";

export const getUsers = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("/users");

			dispatch(setUsers(response.data));
		} catch (error) {
			alert("Произошла ошибка. Попробуйте перезагрузить приложение!");
		}
	};
};

export const postUser = (email, pass) => {
	return async () => {
		try {
			await axios.post("/users", { email, pass });
		} catch (error) {
			alert(error);
		}
	};
};
