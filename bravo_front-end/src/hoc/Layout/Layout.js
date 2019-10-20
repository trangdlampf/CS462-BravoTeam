/* Package imports */
import React from "react";
import styled from "styled-components";

/* Component Imports */
import Auxiliary from "../Auxiliary/Auxiliary";
import Navbar from "../../components/navigation/Navbar/Navbar";

/* Styling */
const MainContent = styled.main`
  width: 100%;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* COMPONENT */
const Layout = props => {
  
  return (
    <Auxiliary>
      <Navbar />
      <MainContent>{props.children}</MainContent>
    </Auxiliary>
  );
};

export default Layout;
