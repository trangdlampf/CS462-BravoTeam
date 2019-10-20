/* Package imports */
import React from "react";
import styled from "styled-components";

/* Component Imports */
import Background from "../../assets/images/apples_background.jpg";

/* Styling */
const LandingPageContainer = styled.div`
  width: 100%;
	position: relative;

	background: white;
	background-position: center center;
	background-repeat: no-repeat;
	overflow: hidden;
	color: white;

  .intro-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: calc(100vh - 70px);
    box-sizing: border-box;
  }

	.intro-header {
		position: absolute;
		top: 10%;
    left: 10%;
    font-size: 40px;

		text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.25), -1px 1px 0 rgba(0, 0, 0, 0.25),
			1px -1px 0 rgba(0, 0, 0, 0.25), 1px 1px 0 rgba(0, 0, 0, 0.25),
			0 3px 5px rgba(94, 17, 130, 0.8);
  }
  
  .intro-statement {
    position: absolute;
    top: 30%;
    left: 15%;
    width: 500px;

    color: black;
  }
`;


/* COMPONENT */
const LandingPage = props => {
	/* STATE VARIABLES ------------------------------------------ */
	/* HOOKS ---------------------------------------------------- */
	/* METHODS -------------------------------------------------- */
	/* HANDLERS ------------------------------------------------- */
	/* CONDITIONAL SUB-COMPONENTS ------------------------------- */
	/* RENDER --------------------------------------------------- */
	return (
		<LandingPageContainer>
			<img className="intro-image" src={Background} alt="" />
			<h1 className="intro-header">
				Bravo: Employee Recognition Portal
			</h1>
      <p className="intro-statement">
        Welcome to Bravo!  This is the place to see your personal recognition
        awards as well as recognize your peers for their outstanding work.
        Ready to begin?  
      </p>
		</LandingPageContainer>
	);
};

export default LandingPage;
