import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DragHandle from "@mui/icons-material/DragHandle";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Tooltip } from "@mui/material";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import { editSkillLevelType } from "../../redux/filtersSlice";

const SliderToggles = ({ name }: { name: string }) => {
  const [sliderType, setSliderType] = useState("from");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editSkillLevelType({ name, sliderType }));
  }, [sliderType]);

  const ButtonsLabels = [
    { label: "from", component: <ChevronRightIcon /> },
    { label: "to", component: <ChevronLeftIcon /> },
    { label: "equals", component: <DragHandle /> },
    {
      label: "between",
      component: <UnfoldLessIcon sx={{ rotate: "90deg" }} />,
    },
  ];

  return (
    <ToggleButtonGroup
      value={sliderType}
      sx={{ pt: 1 }}
      exclusive
      onChange={(_, value) => value && setSliderType(value)}
      aria-label={t(`pages.dashboard.slider.buttonContainerl`)}
    >
      {ButtonsLabels.map((button) => (
        <Tooltip
          key={button.label}
          title={t(`pages.dashboard.slider.${button.label}`)}
          arrow
        >
          <ToggleButton
            key={button.label}
            value={button.label}
            aria-label={button.label}
            size="small"
            selected={sliderType === button.label}
            color="secondary"
          >
            {button.component}
          </ToggleButton>
        </Tooltip>
      ))}
    </ToggleButtonGroup>
  );
};

export default SliderToggles;
