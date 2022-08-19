import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: grid;
	place-items: center;
	.modal-content {
		/* min-height: 200px;
		min-width: 200px; */
		padding: 20px 50px;
		background-color: #fff;
		position: relative;
	}
	.close-btn {
		position: absolute;
		z-index: 3;
		top: 5px;
		right: 5px;
		font-size: 20px;
		font-weight: bold;
		color: black;
		cursor: pointer;
	}
	.date-error {
		color: red;
		text-align: left;
	}
`;
