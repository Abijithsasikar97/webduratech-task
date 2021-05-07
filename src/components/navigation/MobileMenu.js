import React from "react";
import theme from "../../variables";
import { bool } from 'prop-types';
import NavItem from "./nav-item";
import styled from "styled-components";

const navData = [
  { home: "launches" },
  { launches: "launches" },
  { rockets: "rockets" },
];

export const StyledMenuCon = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.blackTransparent};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }
  display: ${({ openMobileMenu }) => openMobileMenu ? 'block' : 'none'};
`;

const NavList = styled.ul`
  color: white;
`;

const MobileMenu = ({ openMobileMenu }) => {
  return (
    <StyledMenuCon openMobileMenu={openMobileMenu}>
      <NavList>
        {navData.map((value, index) => {
          const title = Object.keys(value)[0];
          const url = value[title];

          return (
            <NavItem key={index} title={title} url={url} color={theme.white} />
          );
        })}
      </NavList>
    </StyledMenuCon>
  );
};

MobileMenu.propTypes = {
    openMobileMenu: bool.isRequired,
  }

export default MobileMenu;
