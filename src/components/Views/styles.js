import styled from "styled-components";

export const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button,
  input {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
  input {
    border: 1px solid #000;
  }
  .clear {
      margin-left: -80px;
      padding: unset;
      width: auto;
      background-color: unset;
      margin-right: unset;
      outline: none;
      color: #ff0000;
      cursor: pointer;
  }
`;

export const ScrollDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

export const Loader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #ff0000;
`;
