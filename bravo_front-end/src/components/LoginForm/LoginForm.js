/* Package imports */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* Component Imports */
/* Styling */
const LoginFormContainer = styled.div`
	width: 20%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	background: rgba(250, 250, 250, 0.8);
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

/* COMPONENT */
const LoginForm = props => {
	/* STATE VARIABLES ------------------------------------------ */
	/* HOOKS ---------------------------------------------------- */
	/* METHODS -------------------------------------------------- */
	/* HANDLERS ------------------------------------------------- */
	/* CONDITIONAL SUB-COMPONENTS ------------------------------- */
	/* RENDER --------------------------------------------------- */
	return (
		<LoginFormContainer>
			<p>Username: </p>
			<input type="text" />
			<p>Password: </p>
			<input type="password" />
			{/* eslint-disable-next-line */}
			<a href="#" style={{width: "100%"}}>
				<p>Forgot Password?</p>
			</a>
			<Link to="/admin">
				<button style={{margin: "5px 10px"}}>Admin Login</button>
			</Link>
			<Link to="/user">
				<button style={{margin: "5px 10px"}}>User login</button>
			</Link>
		</LoginFormContainer>
	);
};

export default LoginForm;
