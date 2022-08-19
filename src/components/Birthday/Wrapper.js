import styled from "styled-components";

export const Wrapper = styled.article`
	.photo-container {
		width: 60px;
		margin: 0 auto;
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
