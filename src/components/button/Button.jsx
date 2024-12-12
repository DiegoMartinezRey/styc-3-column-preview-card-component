import { StyledButton } from './button.styles';

const Button = ({ color, children }) => {
	return <StyledButton color={color}>{children}</StyledButton>;
};

export default Button;
