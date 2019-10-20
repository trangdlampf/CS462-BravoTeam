/* Package imports */
import React from "react";
import styled from "styled-components";

/* Component Imports */
import Background from "../../assets/images/apples_background.jpg";
import LoginForm from "../../components/LoginForm/LoginForm";

/* Styling */
const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${Background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;


/* COMPONENT */
const Login = props => {
  /* STATE VARIABLES ------------------------------------------ */
  /* HOOKS ---------------------------------------------------- */
  /* METHODS -------------------------------------------------- */
  /* HANDLERS ------------------------------------------------- */
  /* CONDITIONAL SUB-COMPONENTS ------------------------------- */
  /* RENDER --------------------------------------------------- */
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
