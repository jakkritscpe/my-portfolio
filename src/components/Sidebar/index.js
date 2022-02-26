import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarRoute,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  CloseIcon,
  Icon,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='experience' onClick={toggle} >Experience</SidebarLink>
          <SidebarLink to='discover' onClick={toggle} >Discover</SidebarLink>
          <SidebarLink to='otherside' onClick={toggle} >Other side</SidebarLink>
          <SidebarLink to='about' onClick={toggle} >About</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin' onClick={toggle} >Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
