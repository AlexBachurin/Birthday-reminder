import React from "react";
import { Wrapper } from "./Wrapper";

const Birthday = ({ age, name, photo, date, phone }) => {
	return (
		<Wrapper>
			<div className="photo-container">
				<img
					src="https://res.cloudinary.com/dljezd6qv/image/upload/v1660756352/empty_user.png"
					alt=""
				/>
			</div>
			<div className="person-info">
				<p>{name}</p>
				<p>{age}</p>
				<p>{date}</p>
				<p>{photo}</p>
				<p>{phone}</p>
			</div>
		</Wrapper>
	);
};

export default Birthday;
