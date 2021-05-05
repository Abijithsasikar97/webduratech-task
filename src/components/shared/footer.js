import * as React from 'react';
import styled from 'styled-components';
import theme from '../../variables';

import Logo from '../logo';

const FooterWrapper = styled.footer`
  display: block;
  background-color: #050c0e;
  padding: 50px 0;
`

const Copyright = styled.div `
  color: white;
  text-align: center;
  background-color: #182629;
  padding: 20px;
  font-size: 14px;
`

const footer = (props) => {
  return (
    <>
      <FooterWrapper>
        <Logo background={'transparent'} color={theme.white} />
      </FooterWrapper>
      <Copyright>Copyright Foolproof 2019</Copyright>
    </>
  )
}

export default footer