import { Box, IconButton, TableCell } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { tableHeaderStyle } from "../../style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HeaderCustomCellProps } from "../../types";

export const HeaderCustomCell: React.FC<HeaderCustomCellProps> = ({
  headCell,
  visible,
}) => {
  return (
    <>
      {visible === 0 &&
        headCell.id != "skillsList" &&
        headCell.id != "skillsRanking" &&
        headCell.id != "anniEsperienza" && (
          <TableCell
            key={headCell.id}
            align={"center"}
            sx={[tableHeaderStyle, { width: 10, color: commonColors.white }]}
          >
            {headCell.sorted === true ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>{headCell.label}</Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton
                    //bgColor="white"
                    size="small"
                  >
                    <ArrowDropUpIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton size="small">
                    <ArrowDropDownIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Box>{headCell.label}</Box>
            )}
          </TableCell>
        )}
      {visible > 0 && (
        <TableCell
          key={headCell.id}
          align={"center"}
          sx={[tableHeaderStyle, { width: 50, color: commonColors.white }]}
        >
          {headCell.sorted === true ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>{headCell.label}</Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  //bgColor="white"
                  size="small"
                >
                  <ArrowDropUpIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton size="small">
                  <ArrowDropDownIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Box>{headCell.label}</Box>
          )}
        </TableCell>
      )}
    </>
  );
};
{
  /* <ArrowDropUpIcon sx={{ color: (orderBy === headCell.id && order === 'asc') ? 'primary' : 'white' }}/> */
}

// <TableCell
// key={headCell.id}
// align={"center"}
// sx={[tableHeaderStyle, { width: 10, color: commonColors.white }]}
// >
// {headCell.label}
// </TableCell>

{
  /* <TableCell
key={headCell.id}
align={"center"}
sx={[tableHeaderStyle, { width: 10, color: commonColors.white }]}
>
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Box>{headCell.label}</Box>
  <Box sx={{ display: "flex", flexDirection: "row" }}>
    <IconButton
      //bgColor="white"
      size="small"
    >
      <ArrowDropUpIcon sx={{ color: "white" }} />
    </IconButton>
    <IconButton size="small">
      <ArrowDropDownIcon sx={{ color: "white" }} />
    </IconButton>
  </Box>
</Box>
</TableCell>  */
}
