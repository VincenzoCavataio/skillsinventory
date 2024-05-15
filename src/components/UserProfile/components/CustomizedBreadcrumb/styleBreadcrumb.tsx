import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = "rgba(140, 190, 45, 0.6)";
  return {
    backgroundColor,
    height: theme.spacing(3),
    cursor: "pointer",
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.2),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;
