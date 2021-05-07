import * as React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

export const BurgerMenu = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  width: 25px;
  z-index: 56;

  span {
    background-color: ${({ openMobileMenu }) => openMobileMenu ? 'unset' : '#fff'};
    display: block;
    height: ${({ openMobileMenu }) => openMobileMenu ? 'unset' : '2px'};
    left: 50%;
    position: absolute;
    top: 50%;
    transition: background .3s;
    transform: ${({ openMobileMenu }) => openMobileMenu ? 'scale3d(1.5, 1.5, 1.5)' : 'translate(-50%,-50%)'};
    width: 25px;
    color: #fff;

    &:before,
    &:after {
      background-color: #fff;
      content: "";
      height: 2px;
      position: absolute;
      width: ${({ openMobileMenu }) => openMobileMenu ? 'unset' : '100%'};
      left: 0;
    }

    &:before {
      top: -6px;
    }
    
    &:after {
      bottom: -6px;
      width: '100%';
    }
  }
`

const burger = ({ openMobileMenu, setOpenMenu }) => {
  return (
    <BurgerMenu openMobileMenu={openMobileMenu} onClick={() => setOpenMenu(!openMobileMenu)}>
      <span>{openMobileMenu ? `X` : ''}</span>
    </BurgerMenu>
  )
}

burger.propTypes = {
  openMobileMenu: bool.isRequired,
  setOpenMenu: func.isRequired,
};

export default burger