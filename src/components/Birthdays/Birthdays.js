import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBirthdays } from "../../features/birthdays/birthdaysSlice";
import BirthdaysList from "../BirthdaysList/BirthdaysList";
import { Wrapper } from "./Wrapper";

const Birthdays = ({ openFormModal }) => {
	const dispatch = useDispatch();
	const { user, isLoading } = useSelector((store) => store.user);
	//get all birthdays on page load
	useEffect(() => {
		//only start to fetch when user changes and is not currenty loading
		if (!isLoading) {
			dispatch(fetchBirthdays(user.uid));
		}
	}, [user, dispatch]);
	return (
		<Wrapper>
			{isLoading ? (
				<div className="loading-container">
					<LoadingOutlined className="loading-icon" />
				</div>
			) : (
				<>
					<h1 className="main-title">Birthdays Today</h1>
					<BirthdaysList></BirthdaysList>
					<div className="btn-container">
						<button onClick={openFormModal} className="add-btn" type="button">
							add person
						</button>
					</div>
				</>
			)}
		</Wrapper>
	);
};

export default Birthdays;
