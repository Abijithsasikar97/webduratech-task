import * as React from 'react';
import styled from 'styled-components';

export const LinkWrap = styled.a`
  text-decoration: none;
  color: ${props => props.color};
  display: block;

  :hover {
    color: ${props => props.hover};
    text-transform: inherit;
  }
`;


const link = (props) => <LinkWrap href={props.url} color={props.color} hover={props.hover}>{props.title}</LinkWrap>

export default link