import styled from "styled-components";

const CommonCellStyle = `
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: rgba(150, 212, 212, 0.4);
  }
`;

export const BLocksTable = styled.table`
  font-size: 18px;
`;

export const TableTr = styled.tr`
  &:nth-child(even) {
    background-color: rgba(150, 212, 212, 0.4);
  }
`;

export const TableHead = styled.thead``;

export const TableTh = styled.th`
  font-weight: bold;
  ${CommonCellStyle}
`;

export const TableBody = styled.tbody``;

export const TableTd = styled.td`
  ${CommonCellStyle}
`;
