import { Box, Button, Tooltip, Typography } from "@mui/material";
import DeleteIconOutline from "@mui/icons-material/DeleteOutlineSharp";
import SliderComponent from "../SliderComponent";
import style from "./style";
import { useDispatch } from "react-redux";
import { removeSkill } from "../../redux/filtersSlice";

const SkillCard = ({ name }: { name: string }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeSkill({ label: name }));
  };

  return (
    <Box sx={style.container}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Tooltip title={name?.toUpperCase()} arrow placement="top">
          <Typography
            sx={{
              textOverflow: "ellipsis",
              maxWidth: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontSize: 14,
            }}
          >
            {name?.toUpperCase()}
          </Typography>
        </Tooltip>
        <Button sx={{ w: 0, p: 0, minWidth: 0 }} onClick={handleDelete}>
          <DeleteIconOutline color="primary" />
        </Button>
      </Box>
      <SliderComponent name={name} />
    </Box>
  );
};

export default SkillCard;
