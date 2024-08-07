import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";
import { CheckedCert } from "../../../../redux/types";

type Props = {
  row: CheckedCert;
  handleRemove: (id: number | string) => void;
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
