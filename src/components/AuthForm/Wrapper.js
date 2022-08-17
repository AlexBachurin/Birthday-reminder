import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	.form-container {
		position: relative;
		max-width: 640px;
		width: 480px;
		padding: 20px 20px;
		padding-top: 40px;
		margin: 0 auto;
		background-color: #fff;
		.close-btn {
			position: absolute;
			top: 0;
			right: 8px;
			font-size: 20px;
			color: red;
			cursor: pointer;
		}
	}
`;
