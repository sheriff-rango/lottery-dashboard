import styled from "styled-components";

const CommonCellStyle = `
  padding: 15px 10px;
  // border-bottom: 1px solid #ddd;
  text-align: center;
  // &:nth-child(even) {
  //   background-color: rgba(150, 212, 212, 0.4);
  // }
`;

export const BLocksTable = styled.table`
  font-size: 18px;
  width: 100%;
  height: calc(100% - 87px);
`;

export const TableTr = styled.tr`
  text-align: center;
  /* &:nth-child(even) {
    background-color: rgba(150, 212, 212, 0.4);
  } */
`;

export const TableHead = styled.thead``;

export const TableTh = styled.th`
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  ${CommonCellStyle}
`;

export const TableBody = styled.tbody`
  height: calc(100% - 55px);
  overflow: auto;
`;

export const TableTd = styled.td`
  ${CommonCellStyle}
  cursor: default;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
