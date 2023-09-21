import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SliderComponent from "../SliderComponent";
import style from "./style";
import { deleteSkills } from "../../redux/skillSlice";
import { useSelector, useDispatch } from "react-redux"


const SkillCard = ({ name }: { name: string }) => {
  const dispatch = useDispatch();
  const skillsItems = useSelector((state: string[]) => state);

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

        {
          skillsItems.map((item, index) => {
            return (
              <Button variant="outlined" sx={{ ml: 1 }} onClick={() => dispatch(deleteSkills({ id: index }))}>
                <DeleteIcon />
              </Button>
            )
          })
        }
      </Box>
      <SliderComponent />
    </Box>
  );
};

export default SkillCard;



