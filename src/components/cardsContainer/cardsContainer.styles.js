import styled from 'styled-components';

const StyledContainer = styled.section`
	display: flex;
	flex-direction: column;
	@media screen and (width > 768px) {
		flex-direction: row;
	}
`;

const StyledCardsContainer = styled.div`
	background-color: ${props => props.$color};
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 48px;
`;

const StyledImg = styled.img`
	width: 64px;
	height: 40px;
`;

const StyledTitle = styled.h1`
	font-family: 'Big Shoulders Display', sans-serif;
	font-size: 40px;
	font-weight: bold;
`;

const StyledDescription = styled.p`
	font-size: 15px;
`;

// const H1Card = styled.h1``

export {
	StyledCardsContainer,
	StyledContainer,
	StyledDescription,
	StyledImg,
	StyledTitle
};
