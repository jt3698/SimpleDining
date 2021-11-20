
import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../components/TablePopup";
import floorPlan from '../floorplan.jpg'

const PageWrapper = styled.div`
	width: 100%;
	height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
	justify-content: center;
	margin-bottom: 10%;
`;

const ButtonsWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
`;

const StyledButton = styled.button`
	width: 30%;
	height: 50%;
	padding: 20px;
	box-sizing: border-box;
`;

const ImageWrapper = styled.div`
	width: 80%;
	height: 60%;
	position: absolute;
`
const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: scale-down;
`

const StyledTables = styled.div`
	border-radius: 50%;
	width: ${props => props.diameter};
	height: 0;
	padding-bottom: ${props => props.diameter};
	background-color: ${props => props.color};
	position: absolute;
	top: ${props => props.top};
	left: ${props => props.left};
	opacity: 0.2;
`

const TablesPage = (props) => {
	
	const [selected, setSelected] = useState("Food")
	const [showPopup, setShowPopup] = useState(-1)
	
	// TODO get heatprops and image from backend?
	const heatProps = {
		"Locations": [
			{diameter: "15%", top: "60%", left: "5%"},
			{diameter: "15%", top: "82%", left: "30%"},
			{diameter: "15%", top: "82%", left: "53%"},
			{diameter: "15%", top: "82%", left: "75%"},
			{diameter: "15%", top: "50%", left: "75%"},
			// {diameter: "5%", color: "#bbb", top: "43%", left: "25%"},
		],
		"Food": [
			"#38761d",
			"#38761d",
			"#38761d",
			"#38761d",
			"#38761d",
		],
		"Service": [
			"#38761d",
			"#38761d",
			"#ff9900",
			"#cf2a27",
			"#38761d",
		],
		"Ambience": [
			"#ff9900",
			"#38761d",
			"#38761d",
			"#38761d",
			"#cf2a27",
		],
	}

	return (
		<PageWrapper>
			<ImageWrapper>
				<ButtonsWrapper>
					<StyledButton highlight={selected==="Food"} onClick={()=>setSelected("Food")}>Food</StyledButton>
					<StyledButton highlight={selected==="Service"} onClick={()=>setSelected("Service")}> Service</StyledButton>
					<StyledButton highlight={selected==="Ambience"} onClick={()=>setSelected("Ambience")}>Ambience</StyledButton>
				</ButtonsWrapper>
				<StyledImage src={floorPlan} />
				{heatProps["Locations"].map((props,idx)=>
					<StyledTables onClick={()=>setShowPopup(idx)} {...props} color={heatProps[selected][idx]}/>
				)}
				{heatProps["Locations"].map((props,idx)=>{
					if(showPopup === idx)return <Popup number={idx}/>
					return null;
				})}

			</ImageWrapper>
		</PageWrapper>
	)
}

export default TablesPage;