import styled from "styled-components";

export const Wrapper = styled.article`
	background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
	.photo-container {
		width: 80px;
		margin: 0 auto;
		padding-top: 20px;

		img {
			width: 100%;
			height: auto;
			object-fit: cover;
			border-radius: 15px;
		}
	}
	.person-info {
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 18px;
	}
	.btn-container {
		padding-bottom: 30px;
	}
	.delete-btn {
		min-width: 80px;
		display: block;
		border-radius: 10px;
		margin: 0 auto;
		outline: none;
		cursor: pointer;
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
		-webkit-transition: 0.3s ease-in-out all;
		transition: 0.3s ease-in-out all;
		:hover {
			background: #ff8080;
		}
	}
`;
