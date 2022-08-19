import styled from "styled-components";

export const Wrapper = styled.article`
	background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
	.photo-container {
		width: 60px;
		margin: 0 auto;
		padding-top: 20px;
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}
	.person-info {
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 18px;
	}
`;
