
import styled from "styled-components";

const Wrapper = styled.div`

	position: absolute;
	top: 0px;
	left: 0px;
`;
const TablePopup = (props)=>{

	return (
		<Wrapper>
			{props.number}
		</Wrapper>
	)
}

export default TablePopup;