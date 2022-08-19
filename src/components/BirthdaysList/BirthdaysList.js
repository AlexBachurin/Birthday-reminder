import React from "react";
import { Wrapper } from "./Wrapper";
import { birthdaysArr } from "../../birthdays-mock";
import Birthday from "../Birthday/Birthday";
const BirthdaysList = () => {
	return (
		<Wrapper>
			<div className="birthdays-select">
				<button type="button">today</button>
				<button type="button">all</button>
			</div>
			<div className="birthdays-container">
				{birthdaysArr.map((item) => {
					return <Birthday key={item.id} {...item} />;
				})}
			</div>
		</Wrapper>
	);
};

export default BirthdaysList;
