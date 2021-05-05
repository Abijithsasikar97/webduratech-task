import * as React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin-bottom: 40px;
`
const section = (props) => {
  return (
    <SectionWrapper>
      {props.children}
    </SectionWrapper>
  )
}

export default section