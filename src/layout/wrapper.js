import * as React from "react";
import styled from "styled-components";
import { device } from "../helpers";

export const WrapperFrame = styled.div`
  width: 75%;
  position: relative;
  margin: 0 auto;
  height: auto;

  @media ${device.laptop} {
    width: 90%;
    max-width: 1440px;
  }
`;

const wrapper = (props) => <WrapperFrame>{props.children}</WrapperFrame>;

export default wrapper;
