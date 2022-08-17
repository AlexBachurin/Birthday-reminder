import styled from "styled-components";

export const Wrapper = styled.nav`
	border-bottom: 1px solid black;
	.nav-content {
		width: 90%;
		max-width: 1280px;
		margin: 0 auto;
		padding: 5px 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.profile-container {
	}
	.profile-img-container {
		width: 40px;
		cursor: pointer;
	}
	.profile-img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;
