
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
`;
const TablePopup = (props)=>{

	return (
		<Wrapper>
			{props.number}
		</Wrapper>
	)
}

export default TablePopup;