import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SliderComponent from "../SliderComponent";
import style from "./style";
import SliderComponentBetween from "../SliderComponentBetween";
import { useState } from "react";

const SkillCard = ({ name }: { name: string }) => {
  const [sliderType, setSliderType] = useState<string>("from");
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

        <Button variant="outlined" sx={{ ml: 1 }}>
          <DeleteIcon />
        </Button>
      </Box>
      {sliderType === "between" ? (
        <SliderComponentBetween
          sliderType={sliderType}
          setSliderType={setSliderType}
        />
      ) : (
        <SliderComponent
          sliderType={sliderType}
          setSliderType={setSliderType}
        />
      )}
    </Box>
  );
};

export default SkillCard;
