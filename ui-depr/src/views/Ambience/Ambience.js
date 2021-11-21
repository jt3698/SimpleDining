import React from "react";
import styled from "styled-components";
import floorPlan from '../../images/floorplan.jpg'
import {CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText} from '@coreui/react'

const PageWrapper = styled.div`
	width: 100%;
	height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
	margin-bottom: 10%;
`;

const ImageWrapper = styled.div`
	width: 80%;
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
`
const ReviewWrapper = styled.div`
  width:100%;
	margin-top:5%;
`
const StyledHeading = styled.h1`

`
const RowWrapper = styled.div`
	display:flex;
	flex-direction:row;
	
	width:100%;
	gap:10px;
`
const StyledTitle = styled.h1`
	font-size: 5rem;
`

const Ambience = () => {

  const selected = "Ambience"

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
		],
		"Food": [
			"#38761d",
			"#38761d",
			"#38761d",
			"#38761d",
			"#38761d",
			"#cf2a27",
			"#ff9900",
			"#ff9900",
			"#38761d",
			"#ff9900",
			"#ff9900",
		],
		"Service": [
			"#38761d",
			"#38761d",
			"#ff9900",
			"#cf2a27",
			"#38761d",
			"#ff9900",
			"#ff9900",
			"#38761d",
			"#ff9900",
			"#38761d",
			"#ff9900",
		],
		"Ambience": [
			"#ff9900",
			"#38761d",
			"#38761d",
			"#38761d",
			"#cf2a27",
			"#cf2a27",
			"#cf2a27",
			"#ff9900",
			"#ff9900",
			"#ff9900",
			"#38761d",
		],
	}
	const ambienceReviews = [
		{
		  title: "Don",
		  subtitle: "⭐⭐⭐⭐★",
		  text: "Very Nice place to hangout with friends or family"
		},
		{
			title: "Alex",
			subtitle: "⭐⭐⭐⭐⭐",
			text: "very chill place, gonna bring my mates here next time"
		}
	  ]

		const CCCard = ({review}) =>{
			return (
				<CCard style={{flex: "1"}}>
				<CCardBody>
					<CCardTitle>{review.title}</CCardTitle>
					<CCardSubtitle>{review.subtitle}</CCardSubtitle>
			<CCardText>{review.text}</CCardText>
				</CCardBody>
			</CCard>
			)
		}
	

  return (
    <PageWrapper>
			<StyledTitle> Don's Japanese </StyledTitle>
	<ImageWrapper>
		<StyledImage src={floorPlan} />
		{heatProps["Locations"].map((props,idx)=>
			<StyledTables key={idx} {...props} color={heatProps[selected][idx]}>
			</StyledTables>
		)}
	</ImageWrapper>

	<ReviewWrapper>
        <StyledHeading>Ambience Reviews</StyledHeading>
				{ambienceReviews.map((review, idx)=>{
					if(idx%2===1)return null;
					return (
						<RowWrapper key={idx}>
							<CCCard review={ambienceReviews[idx]}></CCCard>
							{idx+1 < ambienceReviews.length && <CCCard review={ambienceReviews[idx+1]}></CCCard>}
						</RowWrapper>
					)
				})}
      </ReviewWrapper>
	</PageWrapper>
)
}

export default Ambience
