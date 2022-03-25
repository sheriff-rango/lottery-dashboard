import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  background-color: #515151;
  padding: 30px 0;
`;

export const SidebarItem = styled.div<{ checked?: boolean }>`
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
  ${({ checked }) => checked && "color: #3498db;"}
  &:hover {
    color: #1d6fa5;
  }
`;
