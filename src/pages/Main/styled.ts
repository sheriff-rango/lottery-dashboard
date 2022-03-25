import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 300px);
  background-color: #252525;
  padding: 0 30px 20px 30px;
  height: calc(100% - 20px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #515151;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export const PageTitle = styled.h1`
  text-align: left;
  text-transform: uppercase;
`;
