import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SliderComponent from "../SliderComponent";
import style from "./style";

const SkillCard = ({ name }: { name: string }) => {
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
        <Typography sx={{ mr: 2 }}>{name?.toUpperCase()}</Typography>

        <Button variant="outlined" sx={{ ml: 1 }}>
          <DeleteIcon />
        </Button>
      </Box>
      <SliderComponent />
    </Box>
  );
};

export default SkillCard;
