<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import React, { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
>>>>>>> f9404e131004952fffb6594d1f00637a23d8a663
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import SwipeLeftAltIcon from "@mui/icons-material/SwipeLeftAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import UnfoldLessDoubleIcon from "@mui/icons-material/UnfoldLessDouble";
import { Tooltip } from "@mui/material";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import { editSkillLevelType } from "../../redux/filtersSlice";

<<<<<<< HEAD
const SliderToggles = ({ name }: { name: string }) => {
  const [sliderType, setSliderType] = useState("from");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editSkillLevelType({ name, sliderType }));
  }, [sliderType]);
=======
const SliderToggles = ({
  sliderType,
  setSliderType,
}: {
  sliderType: string;
  setSliderType: Dispatch<SetStateAction<string>> | undefined;
}) => {




  const handleSliderTypeSelection = (
    _: React.MouseEvent<HTMLElement>,
    selectedType: string
  ) => {
    selectedType !== null && setSliderType && setSliderType(selectedType);
  };
>>>>>>> f9404e131004952fffb6594d1f00637a23d8a663

  const ButtonsLabels = [
    { label: "from", component: <SwipeRightAltIcon /> },
    { label: "to", component: <SwipeLeftAltIcon /> },
    { label: "equals", component: <RadioButtonUncheckedIcon /> },
    {
      label: "between",
      component: <UnfoldLessDoubleIcon sx={{ rotate: "90deg" }} />,
    },
  ];


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editSkillLevelType({ levelType: sliderType }));
  }, [dispatch, sliderType])



  return (
    <ToggleButtonGroup
      value={sliderType}
      sx={{ pt: 1 }}
      exclusive
      onChange={(_, value) => setSliderType(value)}
      aria-label={t(`pages.dashboard.slider.buttonContainerl`)}
    >
      {ButtonsLabels.map((button) => (
        <ToggleButton
          key={button.label}
          value={button.label}
          aria-label={button.label}
          onClick={(event, value) => setSliderType(value)}
        >
          <Tooltip title={t(`pages.dashboard.slider.${button.label}`)} arrow>
            {button.component}
          </Tooltip>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default SliderToggles;
