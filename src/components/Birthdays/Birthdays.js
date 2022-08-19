import React from "react";
import BirthdaysList from "../BirthdaysList/BirthdaysList";
import { Wrapper } from "./Wrapper";

const Birthdays = () => {
	return (
		<Wrapper>
			<h1 className="main-title">Birthdays Today</h1>
			<BirthdaysList></BirthdaysList>
		</Wrapper>
	);
};

export default Birthdays;
