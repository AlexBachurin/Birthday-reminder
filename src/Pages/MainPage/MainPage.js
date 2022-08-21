import React, { useState } from "react";
import Birthdays from "../../components/Birthdays/Birthdays";
import Navbar from "../../components/Navbar/Navbar";
import { Wrapper } from "./Wrapper";
import AddPersonModalForm from "../../components/AddPersonModalForm/AddPersonModalForm";
const MainPage = () => {
	const [showFormModal, setShowFormModal] = useState(false);
	const openFormModal = () => {
		setShowFormModal(true);
	};
	const closeFormModal = () => {
		setShowFormModal(false);
	};

	return (
		<Wrapper>
			<Navbar />
			{/* Content */}
			<Birthdays openFormModal={openFormModal} />
			{showFormModal ? (
				<AddPersonModalForm closeFormModal={closeFormModal} />
			) : null}
		</Wrapper>
	);
};

export default MainPage;
