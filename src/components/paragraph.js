import * as React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 2em;
`

const paragraph = (props) => {
  return (
    <Paragraph>{props.text}</Paragraph>
  )
}

export default paragraph;