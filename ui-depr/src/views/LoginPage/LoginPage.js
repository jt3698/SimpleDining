import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {Button, TextField} from '@mui/material'
import { styled as mat_styled } from '@mui/material/styles';

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
	margin-top:10%;
`;

const StyledInput = mat_styled(TextField)`
	width: 100%;
  font-size: 1.1rem;
  outline: none;
`;

const StyledForget = styled(Link)`
	width: 100%;
	text-align: right;
	color: inherit;
`;

const StyledButton = mat_styled(Button)`
  width: 50%;
	font-size: 1.5rem;
	cursor: pointer;
	margin-top:10%;
`;

const StyledRegister = styled.div`

`

const LoginPage = (props) => {

	const inputEmail = React.useRef("");
	const inputPassword = React.useRef("");

	const isValid = (email, password)=>{
		// TODO: Check login here
		return true;
	}

	const onSubmitHandler = (event) =>{
		event.preventDefault();

		if(isValid(inputEmail.current.value, inputPassword.current.value)){
			props.onLogin()
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
					<StyledForget to="/password-recovery">Forgot Password?</StyledForget>
					<StyledButton variant="contained" type="submit" >Login</StyledButton>
					<StyledRegister>Or register your business <Link to="/register">here</Link></StyledRegister>
				</StyledForm>
			</PageWrapper>
		</React.Fragment>
	)
}

export default LoginPage;