import { INFO_CARDS } from '../../constants/info-cards';
import Button from '../button/Button';
import {
	StyledCardsContainer,
	StyledContainer,
	StyledDescription,
	StyledImg,
	StyledTitle
} from './cardsContainer.styles';

const CardsContainer = () => {
	return (
		<StyledContainer>
			{INFO_CARDS.map(infoCard => {
				return (
					<StyledCardsContainer $color={infoCard.color} key={infoCard.id}>
						<StyledImg src={infoCard.img} alt={infoCard.title} />
						<StyledTitle>{infoCard.title}</StyledTitle>
						<StyledDescription>{infoCard.description}</StyledDescription>
						<Button color={infoCard.color}>Learn more</Button>
					</StyledCardsContainer>
				);
			})}
		</StyledContainer>
	);
};

export default CardsContainer;
