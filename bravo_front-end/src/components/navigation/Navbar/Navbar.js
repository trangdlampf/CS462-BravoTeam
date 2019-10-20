/* Package imports */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

/* Component Imports */
/* Styling */
const NavbarContainer = styled.nav`
	height: 65px;
	padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	background: white;
  border-bottom: 1px solid #ccc;
  
  ul {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    text-align: right;
    list-style: none;
    
  }

  li {
    display: inline-block;
    margin: 20px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

/* COMPONENT */
const Navbar = props => {
	/* STATE VARIABLES ------------------------------------------ */
	/* HOOKS ---------------------------------------------------- */
	/* METHODS -------------------------------------------------- */
	/* HANDLERS ------------------------------------------------- */
	/* CONDITIONAL SUB-COMPONENTS ------------------------------- */
	/* RENDER --------------------------------------------------- */
	return (
		<NavbarContainer>
			<Link to="/"><p>
				<strong>2TOWNS</strong>Ciderhouse
			</p></Link>
			<ul>
				<li><NavLink to="/login">Login</NavLink></li>
			</ul>
		</NavbarContainer>
	);
};

export default Navbar;
