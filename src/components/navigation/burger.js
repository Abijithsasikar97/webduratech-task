import * as React from 'react';
import styled from 'styled-components';

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
    background-color: #fff;
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: background .3s;
    transform: translate(-50%,-50%);
    width: 25px;

    &:before,
    &:after {
      background-color: #fff;
      content: "";
      height: 2px;
      position: absolute;
      width: 100%;
      left: 0;
    }

    &:before {
      top: -6px;
    }
    
    &:after {
      bottom: -6px;
    }
  }
`

const burger = (props) => {
  return (
    <BurgerMenu>
      <span></span>
    </BurgerMenu>
  )
}

export default burger