import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Sub-Reddit Analysis</NavLink>
        <NavIcon  onClick={toggle}>
          <p>Menu</p>
          <IconContext.Provider
            value={{ fill: '#e9ba23', stroke: '#e9ba23',color: '#e9ba23', size: '50px' }}
          >
            <Bars color='#e9ba23'/>
          </IconContext.Provider>
        </NavIcon>
      </Nav>
    </>
  );
};



export default Navbar;