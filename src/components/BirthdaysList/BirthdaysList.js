import React from "react";
import { Wrapper } from "./Wrapper";
import Birthday from "../Birthday/Birthday";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
const BirthdaysList = () => {
	const { birthdays, loading } = useSelector((store) => store.birthdays);
	return (
		<>
			{loading ? (
				<div className="loading-container">
					<LoadingOutlined className="loading-icon" />
				</div>
			) : (
				<Wrapper>
					<div className="birthdays-select">
						<button type="button">today</button>
						<button type="button">all</button>
					</div>
					<div className="birthdays-container">
						{birthdays.length === 0 ? (
							<p className="empty-msg">You havent added a single person yet</p>
						) : (
							<>
								{birthdays.map((item) => {
									return <Birthday key={item.id} {...item} />;
								})}
							</>
						)}
					</div>
				</Wrapper>
			)}
		</>
	);
};

export default BirthdaysList;
