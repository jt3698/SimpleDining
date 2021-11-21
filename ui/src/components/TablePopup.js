import styled from "styled-components";
import ReactModal from 'react-modal';
import { styled as mat_styled } from '@mui/material/styles';
import { Button, List, ListItem, ListItemText } from "@mui/material";

const Wrapper = styled.div`
	display:flex;
	flex-direction:column;
	height:100%;
`;

const StyledTitle = styled.h1`
	width:100%;
`

const StyledList = mat_styled(List)`
	display: flex;
	flex-direction:column;
`
const StyledItem = mat_styled(ListItem)`
	display:grid;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	list-style-type: none;
`

const StyledHeading = mat_styled(ListItem)`
display:grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
list-style-type: none;
font-weight: bold;
text-decoration: underline;
`


const StyledName = mat_styled(ListItemText)`

`

const StyledPrice = mat_styled(ListItemText)`
	text-align:right;
`

const StyledQuantity = mat_styled(ListItemText)`
	text-align:right;
`

const StyledSubtotal = mat_styled(ListItemText)`
	text-align:right;

`

const StyledTotal = mat_styled(ListItemText)`
	margin-top:auto;
	text-align:right;
`

const ButtonWrapper = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:right;
	gap:20px;
	margin-top:20px;
`

const StyledConfirm = mat_styled(Button)`

`

const StyledCancel = mat_styled(Button)`

`

const TablePopup = (props)=>{
	const {orders, number, onRequestClose} = props;
	const filtered = orders.filter(x=>x.Table_number===number)
	const order = (filtered.some(x=>x.Status==="Pending")?filtered.find(x=>x.Status==="Pending"):filtered.find(x=>x.Status==="In Progress"));
	if(!order){
		onRequestClose()
		return null;
	}
	order.Items = order.Items.map(item=>{return {Subtotal: parseInt(item.Price.slice(1)) * parseInt(item.Quantity), ...item}})
	const total = order.Items.reduce((prev, cur)=>prev+cur.Subtotal,0)
	return (
		<ReactModal {...props} style={{
			overlay: {
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: 'rgba(255, 255, 255, 0.75)',
			},
			content: {
				width: "60%",
				height: "75%",
				border: '1px solid #ccc',
				background: 'rgba(255, 255, 255, 0.75)',
				overflow: 'auto',
				WebkitOverflowScrolling: 'touch',
				borderRadius: '4px',
				outline: 'none',
				padding: '20px',
				position: "absolute",
				left: "20%",
				top: "10%",
			}
		}}>
			<Wrapper>
				<StyledTitle>Table Number: <span style={{textAlign:"right", marginLeft:"auto"}}>{number+1}</span></StyledTitle>
				<StyledList>
					<StyledHeading>
						<StyledName>Item</StyledName>
						<StyledPrice>Price</StyledPrice>
						<StyledQuantity>Quantity</StyledQuantity>
						<StyledSubtotal>Subtotal</StyledSubtotal>
					</StyledHeading>

				

					{order.Items.map(item=>
						<StyledItem>
							<StyledName>{item.Name}</StyledName>
							<StyledPrice>{item.Price}</StyledPrice>
							<StyledQuantity>{item.Quantity}</StyledQuantity>
							<StyledSubtotal>{item.Subtotal}</StyledSubtotal>
						</StyledItem>
					)}
				</StyledList>
				<StyledTotal>
					Total: ${total}
				</StyledTotal>
				<ButtonWrapper>
					<StyledConfirm variant="contained" onClick={onRequestClose}> Confirm</StyledConfirm>
					<StyledCancel variant="contained" onClick={onRequestClose}> Cancel</StyledCancel>
				</ButtonWrapper>
			</Wrapper>
		</ReactModal>
	)
}

export default TablePopup;