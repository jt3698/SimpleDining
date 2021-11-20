import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled.div`
  width: 100%;
	height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
	justify-content: center;
	margin-bottom: 10%;
`;

const StyledTitle = styled.h1`
	
`;

const StyledForm = styled.form`
	min-width: 300px;
	
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
	gap: 10px;
	outline: 10px;
`;

const StyledInput = styled.input`
	width: 100%;
  height: 40px;
  font-size: 1.1rem;
  outline: none;
`;

const StyledForget = styled.a`
	width: 100%;
	text-align: right;
	color: inherit;
`;

const StyledButton = styled.button`
  width: 50%;
	font-size: 1.5rem;
`;
const StyledRegister = styled.div`

`

const LoginPage = (props) => {
	const navigate = useNavigate();

	const inputEmail = React.useRef("");
	const inputPassword = React.useRef("");

	const isValid = (email, password)=>{
		// TODO: Check login here
		return true;
	}

	const onSubmitHandler = (event) =>{
		event.preventDefault();

		if(isValid(inputEmail.current.value, inputPassword.current.value)){
			navigate("/tables");
		}
	}

	return (
		<React.Fragment>
			<PageWrapper>
				<StyledForm action="#" onSubmit={onSubmitHandler}>
					<StyledTitle> Business Login </StyledTitle>
					<StyledInput
						id="email"
						placeholder="Email"
						ref={inputEmail}
					/>
					<StyledInput
						id="password"
						placeholder="Password"
						ref={inputPassword}
					/>
					<StyledForget href="/password-recovery">Forgot Password?</StyledForget>
					<StyledButton type="submit">Login</StyledButton>
					<StyledRegister>Or register your business <a href="register">here</a></StyledRegister>
				</StyledForm>
			</PageWrapper>
		</React.Fragment>
	)
}

export default LoginPage;