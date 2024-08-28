import { Box, IconButton, TableCell } from "@mui/material";
import { ACCENT_COLOR, commonColors } from "../../../../common/commonColors";
import { tableHeaderStyle } from "../../style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HeaderCustomCellProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateSortDown, updateSortUp } from "../../../../redux/sortingSlice";
import { ReduxStore } from "../../../../redux/types";

/** Renders a custom table header cell with sorting functionality. */
export const HeaderCustomCell: React.FC<HeaderCustomCellProps> = ({
  headCell,
  visible,
}) => {
  const dispatch = useDispatch();

  /** Retrieves the current sorting state from the Redux store. */
  const arrowColors = useSelector((state: ReduxStore) => state.sorting.sort);

  /** Finds the current sorting state for the specific header cell. */
  const currentSortState = arrowColors.find(
    (item) => item.label === headCell.label
  );

  /** Handles click events for sorting the column.*/
  const handleSortClick = (order: "ASC" | "DESC") => {
    const baseOrder =
      {
        ID: order === "ASC" ? "id_asc" : "id_desc",
        "Last Name": order === "ASC" ? "A-Z" : "Z-A",
        "Experience Years": `${headCell.sortingBE}${order}`,
      }[headCell.label] || `${headCell.sortingBE}${order}`;

    const action = order === "ASC" ? updateSortUp : updateSortDown;

    dispatch(
      action({
        label: headCell.label,
        order: baseOrder,
        color: order === "ASC" ? headCell.color : true,
      })
    );
  };

  /** Renders the icons for sorting (up and down arrows) with click handlers. */
  const renderSortIcons = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton size="small" onClick={() => handleSortClick("ASC")}>
        <ArrowDropUpIcon
          sx={{
            color: currentSortState?.colorUp ? ACCENT_COLOR : "white",
          }}
        />
      </IconButton>
      <Box>{headCell.t}</Box>
      <IconButton size="small" onClick={() => handleSortClick("DESC")}>
        <ArrowDropDownIcon
          sx={{
            color: currentSortState?.colorDown ? ACCENT_COLOR : "white",
          }}
        />
      </IconButton>
    </Box>
  );

  return (
    <>
      {visible === 0 &&
        !["skillsList", "skillsRanking", "anniEsperienza"].includes(
          headCell.id
        ) && (
          <TableCell
            key={headCell.id}
            align="center"
            sx={[tableHeaderStyle, { width: 10, color: commonColors.white }]}
          >
            {headCell.sorted ? renderSortIcons() : <Box>{headCell.t}</Box>}
          </TableCell>
        )}
      {visible > 0 && (
        <TableCell
          key={headCell.id}
          align="center"
          sx={[tableHeaderStyle, { width: 50, color: commonColors.white }]}
        >
          {headCell.sorted ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {renderSortIcons()}
            </Box>
          ) : (
            <Box>{headCell.t}</Box>
          )}
        </TableCell>
      )}
    </>
  );
};
