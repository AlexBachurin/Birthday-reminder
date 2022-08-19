import { PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { transformAge } from "../../utils/transformAge";
import { Wrapper } from "./Wrapper";
const Birthday = ({ name, photo, birthday, phoneNumber }) => {
	return (
		<Wrapper>
			<div className="photo-container">
				<img src={photo} alt="" />
			</div>
			<div className="person-info">
				<p>{name}</p>
				<p>{transformAge(birthday)}</p>
				<p>{birthday}</p>
				<p>
					<PhoneOutlined />
					{phoneNumber}
				</p>
			</div>
		</Wrapper>
	);
};

export default Birthday;
