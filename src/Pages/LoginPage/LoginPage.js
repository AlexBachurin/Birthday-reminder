import React from "react";
import { signInWithGooglePopUp } from "../../firebase";
import { Wrapper } from "./Wrapper";
const LoginPage = () => {
	const handleLogin = () => {
		signInWithGooglePopUp();
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
