import { Slider, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { commonColors } from "../../common/commonColors";

const SliderComponent = (props: {
  sliderValue?: number;
  setSliderValue?: Dispatch<SetStateAction<number>>;
}) => {
  const [value, setValue] = useState(1);
  const { sliderValue, setSliderValue } = props;
  return (
    <>
      <Slider
        aria-label="Always visible"
        style={{ maxWidth: 280, marginTop: 10 }}
        max={5}
        min={1}
        disabled={false}
        value={sliderValue || value}
        marks
        onChange={(_, newValue) =>
          setSliderValue
            ? setSliderValue(Number(newValue))
            : setValue(Number(newValue))
        }
        valueLabelDisplay="auto"
      />
      <Typography
        component={"p"}
        color={commonColors.subtitle}
      >{`Da Livello ${value}`}</Typography>
    </>
  );
};

export default SliderComponent;
