import { PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBirthday } from "../../features/birthdays/birthdaysSlice";
import { transformAge } from "../../utils/transformAge";
import { Wrapper } from "./Wrapper";
const Birthday = ({ id, name, photo, birthday, phoneNumber }) => {
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteBirthday({ uid: user.uid, id }));
	};
	return (
		<Wrapper id={id}>
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
			<div className="btn-container">
				<button type="button" className="delete-btn" onClick={handleDelete}>
					delete
				</button>
			</div>
		</Wrapper>
	);
};

export default Birthday;
