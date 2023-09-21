import { Box, Button, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
              mr: 2,
              textOverflow: "ellipsis",
              maxWidth: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {name?.toUpperCase()}
          </Typography>
        </Tooltip>

        <Button variant="outlined" sx={{ ml: 1 }} onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </Box>
      <SliderComponent name={name} />
    </Box>
  );
};

export default SkillCard;
