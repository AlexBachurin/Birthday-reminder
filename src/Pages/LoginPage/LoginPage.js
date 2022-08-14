import React, { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Wrapper } from "./Wrapper";
const LoginPage = () => {
	const [showModal, setShowModal] = useState(false);
	const handleLoginClick = () => {
		setShowModal(!showModal);
	};
	return (
		<div className="loginPage-container">
			<Wrapper>
				<h1>Birthday Reminder App</h1>
				<div className="btn-container">
					<button
						onClick={handleLoginClick}
						className="login-btn"
						type="button"
					>
						Login
					</button>
				</div>
			</Wrapper>
			{showModal ? (
				<AuthForm
					handleLoginClick={handleLoginClick}
					setShowModal={setShowModal}
				/>
			) : null}
		</div>
	);
};

export default LoginPage;
