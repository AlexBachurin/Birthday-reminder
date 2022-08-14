import React from "react";
import { Wrapper } from "./Wrapper";
const LoginPage = () => {
	return (
		<Wrapper>
			<h1>Birthday Reminder App</h1>
			<div className="btn-container">
				<button className="login-btn" type="button">
					Login
				</button>
			</div>
		</Wrapper>
	);
};

export default LoginPage;
