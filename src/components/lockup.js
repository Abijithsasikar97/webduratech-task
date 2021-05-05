import * as React from "react";
import Title from "./title";
import Paragraph from "./paragraph";
import styled from "styled-components";

export const LockupContainer = styled.div`
  display: block;
  color: inherit;
`;

const Lockup = (props) => {
  return (
    <LockupContainer>
      <Title {...props} />
      <Paragraph {...props} />
    </LockupContainer>
  );
};

export default Lockup;
