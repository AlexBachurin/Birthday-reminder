import React from "react";
import Birthdays from "../../components/Birthdays/Birthdays";
import Navbar from "../../components/Navbar/Navbar";
import { Wrapper } from "./Wrapper";
const MainPage = () => {
	return (
		<Wrapper>
			<Navbar />
			{/* Content */}
			<Birthdays />
		</Wrapper>
	);
};

export default MainPage;
