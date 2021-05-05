import * as React from "react";
import styled from "styled-components";
import theme from "../../variables";

import Navigation from "../navigation";
import Logo, { LogoWrapper } from "../logo";
import Wrapper, { WrapperFrame } from "../../layout/wrapper";

const Header = styled.header`
  background-color: ${theme.blackTransparent};
  position: fixed;
  width: 100%;
  z-index: 100;

  ${LogoWrapper} {
    padding: 10px 0;
  }

  ${WrapperFrame} {
    display: flex;
    align-items: center;
  }
`;

const header = (props) => {
  return (
    <>
      <Header>
        <Wrapper>
          <Logo background={"transparent"} color={theme.white} />
          <Navigation />
        </Wrapper>
      </Header>
    </>
  );
};

export default header;
