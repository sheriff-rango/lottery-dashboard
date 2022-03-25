import React from "react";
import _ from "lodash";
import ReactLoading from "react-loading";

import {
  BLocksTable,
  TableTr,
  TableHead,
  TableTh,
  TableBody,
  TableTd,
  LoadingWrapper,
} from "./styled";

import { TableProps, ColumnInterface } from "./types";

const Table: React.FC<TableProps> = (props) => {
  const { columns, data, isLoading, isFetchMore, handleFetchMore } = props;

  const loadingTr = (
    <TableTr>
      <TableTd style={{ borderBottom: "none" }} colSpan={columns.length + 1}>
        <LoadingWrapper>
          Loading Data
          <ReactLoading color="white" type="bubbles" width={24} height={24} />
        </LoadingWrapper>
      </TableTd>
    </TableTr>
  );

  const LoadMoreButton = (
    <TableTr>
      <TableTd
        style={{ borderBottom: "none", cursor: "pointer" }}
        colSpan={columns.length + 1}
        onClick={handleFetchMore}
      >
        Load More
      </TableTd>
    </TableTr>
  );

  const handleOnScrollTableBody = () => {};

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
        {isLoading ? (
          loadingTr
        ) : data.length > 0 ? (
          <>
            {data.map((dataItem, dataIndex) => (
              <TableTr key={dataIndex}>
                <TableTd>{dataIndex + 1}</TableTd>
                {columns.map((column, columnIndex) => {
                  const cellValue = _.get(dataItem, column.field);
                  return (
                    <TableTd key={columnIndex}>
                      {column.value ? column.value(cellValue) : cellValue}
                    </TableTd>
                  );
                })}
              </TableTr>
            ))}
            {isFetchMore ? loadingTr : LoadMoreButton}
          </>
        ) : (
          <TableTr>
            <TableTd
              style={{ borderBottom: "none" }}
              colSpan={columns.length + 1}
            >
              No Data
            </TableTd>
          </TableTr>
        )}
      </TableBody>
    </BLocksTable>
  );
};

Table.defaultProps = {
  isLoading: false,
  isFetchMore: false,
  handleFetchMore: () => {},
};

export * from "./types";

export default Table;
