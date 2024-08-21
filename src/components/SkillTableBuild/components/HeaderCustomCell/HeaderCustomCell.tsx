import { Box, IconButton, TableCell } from "@mui/material";
import { ACCENT_COLOR, commonColors } from "../../../../common/commonColors";
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
    if (headCell.label === "ID") {
      dispatch(
        updateSortUp({
          label: headCell.label,
          order: `id_asc`,
          color: headCell.color,
        })
      );
    } else if (headCell.label === "Last Name") {
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
          label: "Experience Years",
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
    if (headCell.label === "ID") {
      dispatch(
        updateSortDown({
          label: headCell.label,
          order: `id_desc`,
          color: headCell.color,
        })
      );
    } else if (headCell.label === "Last Name") {
      dispatch(
        updateSortDown({ label: headCell.label, order: `Z-A`, color: true })
      );
    } else if (headCell.label === "Experience Years") {
      dispatch(
        updateSortDown({
          label: "Experience Years",
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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton size="small" onClick={handleArrowDropUpClick}>
                    <ArrowDropUpIcon
                      sx={{
                        color: currentSortState?.colorUp
                          ? ACCENT_COLOR
                          : "white",
                      }}
                    />
                  </IconButton>
                  <Box>{headCell.t}</Box>
                  <IconButton size="small" onClick={handleArrowDropDownClick}>
                    <ArrowDropDownIcon
                      sx={{
                        color: currentSortState?.colorDown
                          ? ACCENT_COLOR
                          : "white",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Box>{headCell.t}</Box>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton size="small" onClick={handleArrowDropUpClick}>
                  <ArrowDropUpIcon
                    sx={{
                      color: currentSortState?.colorUp ? ACCENT_COLOR : "white",
                    }}
                  />
                </IconButton>
                <Box>{headCell.t}</Box>
                <IconButton size="small" onClick={handleArrowDropDownClick}>
                  <ArrowDropDownIcon
                    sx={{
                      color: currentSortState?.colorDown
                        ? ACCENT_COLOR
                        : "white",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Box>{headCell.t}</Box>
          )}
        </TableCell>
      )}
    </>
  );
};
