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
		min-height: 200px;
		min-width: 200px;
		background-color: #fff;
	}
`;
