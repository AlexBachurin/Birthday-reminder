import React, { useState } from "react";
import { Wrapper } from "./Wrapper";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../features/user/userSlice";
const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { user } = useSelector((store) => store.user);

	let navigate = useNavigate();
	const dispatch = useDispatch();
	const handleDropdownClick = () => {
		setShowDropdown(!showDropdown);
	};
	const logoutHandler = () => {
		dispatch(signOutUser());
		navigate("/login");
	};
	return (
		<Wrapper>
			<div className="nav-content">
				<div className="logo-container">
					<img
						src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png"
						alt="logo"
					/>
				</div>
				<div className="profile-container">
					<div onClick={handleDropdownClick} className="profile-img-container">
						<img
							src="https://res.cloudinary.com/dljezd6qv/image/upload/v1660756352/empty_user.png"
							alt="user_image"
							className="profile-img"
						/>
					</div>
					{showDropdown ? (
						<div className="profile-dropdown">
							<i className="arrow up"></i>
							{user?.isLoading ? (
								`Loading...`
							) : (
								<h4 className="profile-title">{`Welcome, ${user?.displayName}`}</h4>
							)}
							<span>
								<Link className="profile-link" to={"/profile"}>
									<UserOutlined className="profile-icon" />
									profile
								</Link>
							</span>
							<span onClick={logoutHandler}>
								<LogoutOutlined className="profile-icon" />
								logout
							</span>
						</div>
					) : null}
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
