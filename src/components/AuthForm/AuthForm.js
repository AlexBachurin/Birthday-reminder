import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Wrapper } from "./Wrapper";

const AuthForm = ({ handleLoginClick, setShowModal }) => {
	const [showLogin, setShowLogin] = useState(true);
	return (
		<Wrapper onClick={() => setShowModal(false)}>
			<div
				onClick={(e) => {
					// do not close modal if anything inside modal content is clicked
					e.stopPropagation();
				}}
				className="form-container"
			>
				{showLogin ? (
					<LoginForm setShowLogin={setShowLogin} />
				) : (
					<RegisterForm setShowLogin={setShowLogin} />
				)}
				<div onClick={handleLoginClick} className="close-btn">
					&#10005;
				</div>
			</div>
		</Wrapper>
	);
};

export default AuthForm;
