import React from 'react';
import styled from 'styled-components';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <>
       <Navbar>
          <StyledNavLink to="/">Reddit Analysis</StyledNavLink>
          <StyledNavLink to="/graphs/word-correlation">Word Correlation Graphs</StyledNavLink>
          <StyledNavLink to="/graphs/performance">Performance Graphs</StyledNavLink>
       </Navbar>
       <Divider/>
       </>
    );
}

export function useRedditAnalysis() {
   return "Some data"
}

const Navbar = styled.div`
   background: #414073;
   padding: 18px;
   flex: 1;
   justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
   color: #BBD5ED;
   margin-right: 16px;
   text-decoration: none;
`;

const Divider = styled.div`
   height: 1px;
   width: 100%;
   background: grey;
`;

export default Navigation;