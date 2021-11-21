import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFilteredOrders, orderFilter } from "../api";
import TablePopup from "../components/TablePopup";
import floorPlan from '../images/floorplan.jpg'
import notificationIcon from '../images/notification-icon.png'

const PageWrapper = styled.div`
	width: 100%;
	height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
	margin-bottom: 10%;
`;

const ButtonsWrapper = styled.div`
	width: 60%;
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
	width: 60%;
	position:relative;
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
	background-color: ${props => props.color}33;
	position: absolute;
	top: ${props => props.top};
	left: ${props => props.left};
	cursor: pointer;
`

const StyledNotif = styled.img`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 0px;
	left: 80%;
`;

const TablesPage = (props) => {
	
	const [selected, setSelected] = useState("Food")
	const [showPopup, setShowPopup] = useState(-1)
	const [showNotif, setShowNotif] = useState(Array(5).fill(0))
	const [orders, setOrders] = useState([])
	
	useEffect(()=>{
		getFilteredOrders(orderFilter("Pending")).then(order=>setOrders(order))
	},[])

	useEffect(()=>{
		const intervalID = setInterval(async ()=>{
			const newOrders = await getFilteredOrders(orderFilter("Pending"));
			const newShowNotif = showNotif.slice()
			if(orders !== newOrders){
				newOrders.forEach(element => {
					if(!orders.some(x=>x.ID === element.ID))
						newShowNotif[element.Table_number] += 1;
				});
				setShowNotif(newShowNotif)
				setOrders(newOrders);
			}
		}, 5000)

		return ()=>{
			clearInterval(intervalID);
		}
	},[orders, showNotif])

	// TODO get heatprops and image from backend?
	const heatProps = {
		"Locations": [
			{diameter: "15%", top: "50%", left: "5%"},
			{diameter: "15%", top: "72%", left: "30%"},
			{diameter: "15%", top: "72%", left: "53%"},
			{diameter: "15%", top: "72%", left: "75%"},
			{diameter: "15%", top: "40%", left: "75%"},
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
			<ButtonsWrapper>
				<StyledButton highlight={selected==="Food"} onClick={()=>setSelected("Food")}>Food</StyledButton>
				<StyledButton highlight={selected==="Service"} onClick={()=>setSelected("Service")}> Service</StyledButton>
				<StyledButton highlight={selected==="Ambience"} onClick={()=>setSelected("Ambience")}>Ambience</StyledButton>
			</ButtonsWrapper>
			<ImageWrapper>
				<StyledImage src={floorPlan} />
				{heatProps["Locations"].map((props,idx)=>
					<StyledTables key={idx} onClick={()=>setShowPopup(idx)} {...props} color={heatProps[selected][idx]}>
						{showNotif[idx]>0 && <StyledNotif src={notificationIcon} />}
					</StyledTables>
				)}
				{showPopup !== -1 && <TablePopup orders={orders} number={showPopup} isOpen={showPopup !== -1} onRequestClose={()=>{
					setShowPopup(-1)
					const newShowNotif = showNotif.slice()
					newShowNotif[showPopup]=0;
					setShowNotif(newShowNotif)
					}} />}

			</ImageWrapper>
		</PageWrapper>
	)
}

export default TablesPage;