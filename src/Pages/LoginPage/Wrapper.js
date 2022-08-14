import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 15px 15px;
	width: 90vw;
	max-width: 640px;
	margin: 0 auto;
	background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
	height: 100vh;
	h1 {
		text-align: center;
		font-size: 40px;
		font-weight: bold;
	}
	.login-btn {
		display: block;
		max-width: 300px;
		padding: 10px 10px;
		color: black;
		font-size: 20px;
		cursor: pointer;
		border-radius: 10px;
		outline: none;
		margin: 0 auto;
	}
`;
