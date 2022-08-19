import styled from "styled-components";

export const Wrapper = styled.section`
	width: 90vw;
	max-width: 1280px;
	margin: 0 auto;
	position: relative;
	.main-title {
		text-align: center;
		font-size: 36px;
		margin-top: 15px;
	}
	.btn-container {
		max-width: 150px;
		margin: 0 auto;
		margin-top: 30px;
	}
	.add-btn {
		cursor: pointer;
		font-size: 20px;
		text-transform: capitalize;
		border-radius: 15px;
		padding: 10px 10px;
		background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
		transition: 0.3s ease-in-out all;
		outline: none;
		&:hover {
			background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
		}
	}
`;
