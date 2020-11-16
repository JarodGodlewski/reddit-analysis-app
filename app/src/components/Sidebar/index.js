import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="Home" spy={true} smooth={true}>Home</SidebarLink>
        <SidebarLink to="PerfGraphs" spy={true} smooth={true}>Performance Graphs</SidebarLink>
        <SidebarLink to="APSGraph" spy={true} smooth={true}>Average Post Success Per hour</SidebarLink>
        <SidebarLink to="WordGraphs" spy={true} smooth={true}>Word Correlation Graphs</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;