import React from "react";

import Table from "../../components/Table";
import TEMP_DATA from "./temp";

const BLOCK_TABLE_COLUMNS: { field: string; name: string }[] = [
  {
    field: "result.block.last_commit.height",
    name: "Height",
  },
  {
    field: "result.block.last_commit.block_id.hash",
    name: "Hash",
  },
];

const Blocks: React.FC = () => {
  return <Table columns={BLOCK_TABLE_COLUMNS} data={TEMP_DATA} />;
};

export default Blocks;
