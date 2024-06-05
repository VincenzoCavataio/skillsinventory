import { Box, IconButton, TableCell } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { tableHeaderStyle } from "../../style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HeaderCustomCellProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateSortDown, updateSortUp } from "../../../../redux/sortingSlice";
import { ReduxStore } from "../../../../redux/types";

export const HeaderCustomCell: React.FC<HeaderCustomCellProps> = ({
  headCell,
  visible,
}) => {
  const arrowColors = useSelector((state: ReduxStore) => state.sorting.sort);
  const currentSortState = arrowColors.find(
    (item) => item.label === headCell.label
  );
  const dispatch = useDispatch();
  const handleArrowDropUpClick = () => {
    if (headCell.label === "Last Name") {
      dispatch(
        updateSortUp({
          label: headCell.label,
          order: `A-Z`,
          color: headCell.color,
        })
      );
    } else if (headCell.label === "Experience Years") {
      dispatch(
        updateSortUp({
          label: "Ranking",
          order: `${headCell.sortingBE}ASC`,
          color: headCell.color,
        })
      );
    } else {
      dispatch(
        updateSortUp({
          label: headCell.label,
          order: `${headCell.sortingBE}ASC`,
          color: headCell.color,
        })
      );
    }
  };

  const handleArrowDropDownClick = () => {
    if (headCell.label === "Last Name") {
      dispatch(
        updateSortDown({ label: headCell.label, order: `Z-A`, color: true })
      );
    } else if (headCell.label === "Experience Years") {
      dispatch(
        updateSortDown({
          label: "Ranking",
          order: `${headCell.sortingBE}DESC`,
          color: true,
        })
      );
    } else {
      dispatch(
        updateSortDown({
          label: headCell.label,
          order: `${headCell.sortingBE}DESC`,
          color: true,
        })
      );
    }
  };
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
                    onClick={handleArrowDropUpClick}
                  >
                    <ArrowDropUpIcon
                      sx={{
                        color: currentSortState?.colorUp ? "#006fb9" : "white",
                      }}
                    />
                  </IconButton>
                  <IconButton size="small" onClick={handleArrowDropDownClick}>
                    <ArrowDropDownIcon
                      sx={{
                        color: currentSortState?.colorDown
                          ? "#006fb9"
                          : "white",
                      }}
                    />
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
                  onClick={handleArrowDropUpClick}
                >
                  <ArrowDropUpIcon
                    sx={{
                      color: currentSortState?.colorUp ? "#006fb9" : "white",
                    }}
                  />
                </IconButton>
                <IconButton size="small" onClick={handleArrowDropDownClick}>
                  <ArrowDropDownIcon
                    sx={{
                      color: currentSortState?.colorDown ? "#006fb9" : "white",
                    }}
                  />
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
  /* <ArrowDropUpIcon sx={{ color: (orderBy === headCell.id && sort === 'true') ? 'secondary' : 'white' }}/> */
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
