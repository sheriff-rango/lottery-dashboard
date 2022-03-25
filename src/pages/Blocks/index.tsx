import React from "react";

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
  return <></>;
};

export default Blocks;
