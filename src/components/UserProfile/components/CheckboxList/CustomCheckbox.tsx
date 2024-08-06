import { styled, ListItemButton } from "@mui/material";

export const CustomListItemButton = styled(ListItemButton)(() => ({
  "&.Mui-disabled": {
    opacity: 1,
    color: "black",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));
