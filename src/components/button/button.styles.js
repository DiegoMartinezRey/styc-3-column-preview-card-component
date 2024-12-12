import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: white;
	color: ${({ color }) => color};
	border: none;
	padding: 12px 0;
	border-radius: 25px;
	width: 146px;
	border: 1px solid white;
	cursor: pointer;

	@media screen and (width>768px) {
		display: block;
	}

	@media (hover: hover) {
		&:hover {
			background-color: transparent;
			color: white;
		}
	}
`;

export { StyledButton };
