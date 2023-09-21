import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import SwipeLeftAltIcon from "@mui/icons-material/SwipeLeftAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import UnfoldLessDoubleIcon from "@mui/icons-material/UnfoldLessDouble";
import { Tooltip } from "@mui/material";
import { t } from "i18next";

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

  const ButtonsLabels = [
    { label: "from", component: <SwipeRightAltIcon /> },
    { label: "to", component: <SwipeLeftAltIcon /> },
    { label: "equals", component: <RadioButtonUncheckedIcon /> },
    {
      label: "between",
      component: <UnfoldLessDoubleIcon sx={{ rotate: "90deg" }} />,
    },
  ];

  return (
    <ToggleButtonGroup
      value={sliderType}
      sx={{ pt: 1 }}
      exclusive
      onChange={handleSliderTypeSelection}
      aria-label={t(`pages.dashboard.slider.buttonContainerl`)}
    >
      {ButtonsLabels.map((button) => (
        <ToggleButton
          key={button.label}
          value={button.label}
          aria-label={button.label}
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
