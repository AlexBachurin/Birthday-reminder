import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	.birthdays-select {
		display: flex;
		gap: 20px;
		margin: 0 auto;
		button {
			min-width: 120px;
			border-radius: 10px;
			outline: none;
			cursor: pointer;
			background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
			&:hover {
				background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
			}
		}
	}
	.birthdays-container {
		margin-top: 40px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
`;
