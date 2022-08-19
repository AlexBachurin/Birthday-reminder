import React from "react";
import BirthdaysList from "../BirthdaysList/BirthdaysList";
import { Wrapper } from "./Wrapper";

const Birthdays = ({ openFormModal }) => {
	return (
		<Wrapper>
			<h1 className="main-title">Birthdays Today</h1>
			<BirthdaysList></BirthdaysList>
			<div className="btn-container">
				<button onClick={openFormModal} className="add-btn" type="button">
					add person
				</button>
			</div>
		</Wrapper>
	);
};

export default Birthdays;
