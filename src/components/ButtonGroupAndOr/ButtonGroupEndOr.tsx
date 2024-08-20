import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PRIMARY_COLOR } from "../../common/commonColors";
import { useState } from "react";
import { updateAndOr } from "../../redux/andOrSlice";
import { useDispatch } from "react-redux";

/** Component for the button group of the AND/OR */
export const ButtonGroupAndOr = () => {
  const [value, setValue] = useState("OR");

  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <ToggleButtonGroup
      exclusive
      onChange={(_, value) => {
        value && setValue(value);
        dispatch(updateAndOr(value));
      }}
      value={value}
      aria-label={t(`pages.dashboard.slider.buttonContainerl`)}
      sx={{ background: PRIMARY_COLOR }}
    >
      <ToggleButton
        key={"AND"}
        value={"AND"}
        sx={{ width: 60, fontWeight: 800, height: 36.5 }}
      >
        <Typography variant="caption" color={"white"}>
          {t(`pages.dashboard.buttonGroup.and`)}
        </Typography>
      </ToggleButton>
      <ToggleButton
        key={"OR"}
        value={"OR"}
        sx={{ width: 60, fontWeight: 800, height: 36.5 }}
      >
        <Typography variant="caption" color={"white"}>
          {t(`pages.dashboard.buttonGroup.or`)}
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
