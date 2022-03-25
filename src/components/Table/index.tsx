import React from "react";
import _ from "lodash";

import {
  BLocksTable,
  TableTr,
  TableHead,
  TableTh,
  TableBody,
  TableTd,
} from "./styled";

interface TableProps {
  data: any[];
  columns: any[];
}

const Table: React.FC<TableProps> = (props) => {
  const { columns, data } = props;

  return (
    <BLocksTable>
      <TableHead>
        <TableTr>
          <TableTh>No</TableTh>
          {columns.map((column, index) => (
            <TableTh key={index}>{column.name}</TableTh>
          ))}
        </TableTr>
      </TableHead>
      <TableBody>
        {data.map((dataItem, dataIndex) => (
          <TableTr key={dataIndex}>
            <TableTd>{dataIndex + 1}</TableTd>
            {columns.map((column, columnIndex) => (
              <TableTd key={columnIndex}>
                {_.get(dataItem, column.field)}
              </TableTd>
            ))}
          </TableTr>
        ))}
      </TableBody>
    </BLocksTable>
  );
};

export default Table;
