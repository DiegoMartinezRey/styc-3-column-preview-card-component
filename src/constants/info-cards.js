import { v4 } from 'uuid';

export const INFO_CARDS = [
	{
		id: v4(),
		title: 'SEDANS',
		description:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.v',
		img: '/public/assets/images/sedan.svg',
		color: '#E28625'
	},
	{
		id: v4(),
		title: 'SUVS',
		description:
			'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		img: '/public/assets/images/suv.svg',
		color: '#006971'
	},
	{
		id: v4(),
		title: 'LUXURY',
		description:
			'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
		img: '/public/assets/images/luxury.svg',
		color: '#004140'
	}
];
