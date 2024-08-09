import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { commonColors } from "../../../../common/commonColors";

export const StyledBreadcrumbChip = styled(Chip)(() => {
  const { title, white } = commonColors;
  return {
    backgroundColor: white,
    cursor: "pointer",
    color: title,
    "&:hover, &:focus": {
      backgroundColor: emphasize(white, 0.2),
    },
    "&:active": {
      backgroundColor: emphasize(white, 0.12),
    },
  };
}) as typeof Chip;
