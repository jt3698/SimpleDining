import styled from "styled-components";
import logo from '../logo.svg';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	align-items:center
`

const StyledImage = styled.img`
	width: 100px;
`

const StyledTitle = styled.div`
	font-size: 2rem;
`

const Header = (props) => {
	return (
		<StyledHeader>
			<StyledImage src={logo} alt="logo" />
			<StyledTitle>SimpleDining</StyledTitle>
		</StyledHeader>
	)
}

export default Header