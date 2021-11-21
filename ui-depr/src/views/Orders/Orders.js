import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFilteredOrders, orderFilter } from "../../api";
import TablePopup from "../../components/TablePopup";
import floorPlan from '../../images/floorplan.jpg'
import notificationIcon from '../../images/notification-icon.png'
import { styled as mat_styled } from '@mui/material/styles';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const PageWrapper = styled.div`
	width: 100%;
	height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
	margin-bottom: 10%;
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
const Orders = () => {

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
			{diameter: "5%",  top: "40.5%", left: "25%"},
			{diameter: "5%",  top: "40.5%", left: "30.5%"},
			{diameter: "5%",  top: "40.5%", left: "36%"},
			{diameter: "5%",  top: "40.5%", left: "41.5%"},
			{diameter: "5%",  top: "40.5%", left: "47%"},
			{diameter: "5%",  top: "40.5%", left: "52.5%"},
		]
	}

  return (
    <PageWrapper>
			<ImageWrapper>
				<StyledImage src={floorPlan} />
				{heatProps["Locations"].map((props,idx)=>
					<StyledTables key={idx} onClick={()=>setShowPopup(idx)} {...props} >
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

export default Orders
