import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Wrapper } from "./Wrapper";

const AuthForm = ({ handleLoginClick, setShowModal }) => {
	return (
		<Wrapper onClick={() => setShowModal(false)}>
			<div
				onClick={(e) => {
					// do not close modal if anything inside modal content is clicked
					e.stopPropagation();
				}}
				className="form-container"
			>
				<LoginForm />
				<div onClick={handleLoginClick} className="close-btn">
					&#10005;
				</div>
			</div>
		</Wrapper>
	);
};

export default AuthForm;
