import * as React from "react";
import styled from "styled-components";
import { device } from "../helpers";

const sizes = {
  h1: {
    desktop: "65px",
    mobile: "56px",
  },

  h2: {
    desktop: "35px",
    mobile: "28px",
  },

  h3: {
    desktop: "25px",
    mobile: "20px",
  },
};

const margin = {
  h1: {
    desktop: "40px",
    mobile: "40px",
  },

  h2: {
    desktop: "35px",
    mobile: "28px",
  },

  h3: {
    desktop: "15px",
    mobile: "15px",
  },
};

const Title = styled.div`
  display: block;
  position: relative;
  z-index: 40;
  color: inherit;
  margin: 0;
  font-size: ${(props) => sizes[props.size]["mobile"]};
  margin-bottom: ${(props) => margin[props.size]["mobile"]};
  font-weight: 600;

  @media ${device.laptop} {
    font-size: ${(props) => sizes[props.size]["desktop"]};
    margin-bottom: ${(props) => margin[props.size]["desktop"]};
  }
`;

const title = (props) => {
  return (
    <Title as={props.tag} size={props.tag}>
      {props.title}
    </Title>
  );
};

export default title;
