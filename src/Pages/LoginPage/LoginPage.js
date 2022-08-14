import React from "react";
import { useDispatch } from "react-redux";
import { loginUserWithGoogle } from "../../features/user/userSlice";
import { Wrapper } from "./Wrapper";
const LoginPage = () => {
	const dispatch = useDispatch();
	const handleLogin = () => {
		dispatch(loginUserWithGoogle());
	};
	return (
		<Wrapper>
			<h1>Birthday Reminder App</h1>
			<div className="btn-container">
				<button onClick={handleLogin} className="login-btn" type="button">
					Login
				</button>
			</div>
		</Wrapper>
	);
};

export default LoginPage;
