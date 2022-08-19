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
		position: relative;
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
	.profile-dropdown {
		position: absolute;
		top: 68px;
		right: 0;
		background-image: linear-gradient(
			to top,
			lightgrey 0%,
			lightgrey 1%,
			#e0e0e0 26%,
			#efefef 48%,
			#d9d9d9 75%,
			#bcbcbc 100%
		);
		/* height: 150px; */
		z-index: 4;
		padding: 10px 15px;
		display: flex;
		flex-direction: column;
		font-size: 18px;
		text-transform: capitalize;
		span {
			cursor: pointer;
			margin-bottom: 10px;
			color: black;
			text-decoration: none;
			transition: cubic-bezier(0.075, 0.82, 0.165, 1);
			&:hover {
				color: #4d4dff;
			}
			.profile-link {
				color: black;
				&:hover {
					color: #4d4dff;
				}
			}
		}
	}
	.profile-title {
		font-size: 20px;
		margin-bottom: 10px;
	}
	.profile-icon {
		margin-right: 7px;
	}
	.arrow {
		border: solid black;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
		position: absolute;
		top: -7px;
		right: 14px;
	}
	.up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}
`;
