import React, { useState, useEffect } from "react";
import _ from "lodash";

import Table, { ColumnInterface } from "../../components/Table";
import { getAgoString, sendRequest, shortenString } from "../../utils";
import TEMP_DATA from "./temp";

const BLOCK_TABLE_COLUMNS: ColumnInterface[] = [
  {
    field: "result.block.header.height",
    name: "Block",
  },
  {
    field: "result.block.header.data_hash",
    name: "Block Hash",
    value: (value) => shortenString(value, 10, 5),
  },
  {
    field: "result.block.header.proposer_address",
    name: "Proposer",
    value: (value) => shortenString(value, 10, 5),
  },
  {
    field: "result.block.data.txs.length",
    name: "Transactions",
  },
  {
    field: "result.block.header.time",
    name: "Time",
    value: (value) => getAgoString(value),
  },
];

const Blocks: React.FC = () => {
  const [blockData, setBlockData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchMore, setIsFetchMore] = useState<boolean>(false);
  const [currentBlockHeight, setCurrentBlockHeight] = useState<number>(0);

  const fetchBlockHeight = async () => {
    const blocksStatus = await sendRequest("");
    const blockHeight =
      _.get(blocksStatus, "sync_info.latest_block_height") || 0;
    setCurrentBlockHeight(blockHeight);
  };

  const fetchBlockData = async (offset: number, count: number) => {
    const fetchCount = count || 10;
    let result = [];
    for (let i = 0; i < fetchCount; i++) {
      const fetchBlockHeight = currentBlockHeight - i;
      const fetchedData = await sendRequest("");
      result.push(fetchedData);
    }
    const finalData = blockData.concat(result);
    setBlockData(finalData);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setBlockData(TEMP_DATA);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleFetchMore = () => {
    setIsFetchMore(true);
    setTimeout(() => {
      setBlockData(blockData.concat(TEMP_DATA));
      setIsFetchMore(false);
    }, 20000);
  };

  return (
    <Table
      columns={BLOCK_TABLE_COLUMNS}
      data={blockData}
      isLoading={isLoading}
      isFetchMore={isFetchMore}
      handleFetchMore={handleFetchMore}
    />
  );
};

export default Blocks;
