import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";
import { CheckedCert, CheckedEdu, CheckedSkill } from "../../../../redux/types";

type Props = {
  row: CheckedCert | CheckedEdu | CheckedSkill;
  handleRemove: (id: number | string) => void;
};

export const GenericDelete: FC<Props> = ({ row, handleRemove }) => {
  return (
    <Button
      sx={{ opacity: 0.8, width: "2px", height: "10px" }}
      onClick={() => handleRemove(row.id)}
      color="error"
    >
      <Delete />
    </Button>
  );
};
