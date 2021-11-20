import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from '../logo.svg';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	align-items:center
`

const StyledImage = styled.img`
	width: 100px;
	cursor:pointer;
`

const StyledTitle = styled.div`
	font-size: 2rem;
	cursor:pointer;
`

const StyledLogout = styled.button`
	font-size: 2rem;
	margin-left: auto;
	margin-right: 20px;
	border: none;
	background: none;
	cursor: pointer;
`
const Header = (props) => {
	const navigate = useNavigate()
	const isLoggedIn = localStorage.getItem('login');
	const onLogout = ()=>{
		localStorage.removeItem('login')
		navigate("/login")
	}
	return (
		<StyledHeader>
			<StyledImage onClick={()=>navigate("/")} src={logo} alt="logo" />
			<StyledTitle onClick={()=>navigate("/")}>SimpleDining</StyledTitle>
			{isLoggedIn && <StyledLogout onClick={onLogout}>Logout</StyledLogout>}
		</StyledHeader>
	)
}

export default Header