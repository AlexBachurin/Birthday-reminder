import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Wrapper } from "./Wrapper";

const AuthForm = ({ handleLoginClick }) => {
	return (
		<Wrapper>
			<div className="form-container">
				<LoginForm />
				<div onClick={handleLoginClick} className="close-btn">
					&#10005;
				</div>
			</div>
		</Wrapper>
	);
};

export default AuthForm;
