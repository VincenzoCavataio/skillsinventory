import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { FC } from "react";

type Props = {
  row: { id: number };
  handleRemove: (id: number) => void;
};

export const GenericDelete: FC<Props> = ({ row, handleRemove }) => {
  return (
    <Button
      sx={{ width: "2px", height: "10px" }}
      onClick={() => handleRemove(row.id)}
      color="error"
    >
      <Delete />
    </Button>
  );
};
