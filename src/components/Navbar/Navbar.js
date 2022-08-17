import React from "react";
import { Wrapper } from "./Wrapper";

const Navbar = () => {
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
					<div className="profile-img-container">
						<img
							src="https://res.cloudinary.com/dljezd6qv/image/upload/v1660756352/empty_user.png"
							alt="user_image"
							className="profile-img"
						/>
					</div>
					<div className="profile-dropdown">
						{/* <h2>{`Welcome, user name}`}</h2> */}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
