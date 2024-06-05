import { Box, IconButton, TableCell } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { tableHeaderStyle } from "../../style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HeaderCustomCellProps } from "../../types";
import { useDispatch } from "react-redux";
import { updateSort } from "../../../../redux/sortingSlice";

export const HeaderCustomCell: React.FC<HeaderCustomCellProps> = ({
  headCell,
  visible,
}) => {
  // const [sortColor, setSortColor] = useState<ColorButtonSettings[]>([
  //   { label: "Last Name", color: false },
  //   { label: "Ranking", color: false },
  //   { label: "Experience Years", color: false },
  //   { label: "Education", color: false },
  //   { label: "Address", color: false },
  // ]);
  // const [sortUp, setSortUp] = useState<boolean>(false);
  // const [sortDown, setSortDown] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleArrowDropUpClick = () => {
    // if (sortUp === true) {
    //   setSortDown(false);
    //   setSortUp(false);
    // } else {
    //   setSortUp(true);
    //   setSortDown(false);
    // }
    if (headCell.label === "Last Name") {
      dispatch(updateSort({ label: headCell.label, order: `A-Z` }));
    } else if (headCell.label === "Experience Years") {
      dispatch(
        updateSort({ label: "Ranking", order: `${headCell.sortingBE}ASC` })
      );
    } else {
      dispatch(
        updateSort({ label: headCell.label, order: `${headCell.sortingBE}ASC` })
      );
    }
  };

  const handleArrowDropDownClick = () => {
    // if (sortDown === true) {
    //   setSortUp(false);
    //   setSortDown(false);
    // } else {
    //   setSortDown(true);
    //   setSortUp(false);
    // }

    if (headCell.label === "Last Name") {
      dispatch(updateSort({ label: headCell.label, order: `Z-A` }));
    } else if (headCell.label === "Experience Years") {
      dispatch(
        updateSort({ label: "Ranking", order: `${headCell.sortingBE}DESC` })
      );
    } else {
      dispatch(
        updateSort({
          label: headCell.label,
          order: `${headCell.sortingBE}DESC`,
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
                        color: "white",
                      }}
                    />
                  </IconButton>
                  <IconButton size="small" onClick={handleArrowDropDownClick}>
                    <ArrowDropDownIcon
                      sx={{
                        color: "white",
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
                      color: "white",
                    }}
                  />
                </IconButton>
                <IconButton size="small" onClick={handleArrowDropDownClick}>
                  <ArrowDropDownIcon
                    sx={{
                      color: "white",
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
