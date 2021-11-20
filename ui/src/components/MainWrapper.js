import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";

const StyledWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
`

const MainWrapper = (props)=>{

	return (
		<StyledWrapper>
			<Header />
			<Outlet />
		</StyledWrapper>
	);
}

export default MainWrapper